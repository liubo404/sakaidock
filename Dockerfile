FROM debian:latest

MAINTAINER liubo

RUN mkdir /tools
RUN mkdir -p /benwork/mvnrepos
ENV tools /tools


#ADD java maven tomcat to /tools directory

ADD ./apache-maven-3.3.3 $tools/
ADD ./apache-tomcat-7.0.64 $tools/
ADD ./jdk1.7.0_79 $tools/ 


#set the env variables

RUN echo "export JAVA_HOME=/tools/jdk1.7.0_79" >>~/.bashrc
RUN echo "export MVN_HOME=/tools/apache-maven-3.3.3" >>~/.bashrc
RUN echo "export CATALINA_HOME=/tools/apache-tomcat-7.0.64" >>~/.bashrc

RUN echo "export PATH=/tools/jdk1.7.0_79/bin:/tools/apache-maven-3.3.3/bin:$PATH" >>~/.bashrc

#RUN source ~/.bashrc

# set the debian source
RUN echo "" >/etc/apt/sources.list
RUN echo "deb http://ftp.cn.debian.org/debian/ jessie main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb http://ftp.cn.debian.org/debian/ jessie-updates main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb http://ftp.cn.debian.org/debian/ jessie-backports main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb-src http://ftp.cn.debian.org/debian/ jessie main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb-src http://ftp.cn.debian.org/debian/ jessie-updates main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb-src http://ftp.cn.debian.org/debian/ jessie-backports main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb http://ftp.cn.debian.org/debian-security/ jessie/updates main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb-src http://ftp.cn.debian.org/debian-security/ jessie/updates main non-free contrib" >> /etc/apt/sources.list

RUN apt-get update
RUN apt-get install -y wget curl build-essential  emacs git subversion libapache2-svn

WORKDIR /benwork
RUN svn checkout  https://source.sakaiproject.org/svn/sakai/tags/sakai-10.5
RUN cd trunk
RUN mvn clean install sakai:deploy -Dmaven.test.skip=true -Dmaven.tomcat.home=/tools/apache-tomcat-7.0.64 -Dsakai.home=/tools/apache-tomcat-7.0.64/sakai 





EXPOSE 8080 
CMD ["bash","/tools/apache-tomcat-7.0.64/bin/startup.sh"]
 
