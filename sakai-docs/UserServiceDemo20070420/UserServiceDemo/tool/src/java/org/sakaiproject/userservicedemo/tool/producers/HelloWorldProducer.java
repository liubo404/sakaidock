/******************************************************************************
 * HelloWorldProducer.java - created by Sakai App Builder -AZ
 * 
 * Copyright (c) 2006 Sakai Project/Sakai Foundation
 * Licensed under the Educational Community License version 1.0
 * 
 * A copy of the Educational Community License has been included in this 
 * distribution and is available at: http://www.opensource.org/licenses/ecl1.php
 * 
 *****************************************************************************/

package org.sakaiproject.userservicedemo.tool.producers;

import java.util.Date;

import org.sakaiproject.user.api.User;
import org.sakaiproject.user.api.UserDirectoryService;

import uk.org.ponder.rsf.components.UIContainer;
import uk.org.ponder.rsf.components.UIOutput;
import uk.org.ponder.rsf.view.ComponentChecker;
import uk.org.ponder.rsf.view.DefaultView;
import uk.org.ponder.rsf.view.ViewComponentProducer;
import uk.org.ponder.rsf.viewstate.ViewParameters;

/**
 * This is the view producer for the HelloWorld html template
 * @author Sakai App Builder -AZ
 */
public class HelloWorldProducer implements ViewComponentProducer, DefaultView {
	// The VIEW_ID must match the html template (without the .html)
	public static final String VIEW_ID = "HelloWorld";
	public String getViewID() {
		return VIEW_ID;
	}

	public void fillComponents(UIContainer tofill, ViewParameters viewparams,
			ComponentChecker checker) {
		User currentUser = userDirectoryService.getCurrentUser();
		UIOutput.make(tofill, "current-user", currentUser.getDisplayName());
		UIOutput.make(tofill, "current-email", currentUser.getEmail());

		UIOutput.make(tofill, "current-date", new Date().toString());
	}

	private UserDirectoryService userDirectoryService;
	public void setUserDirectoryService(UserDirectoryService userDirectoryService) {
		this.userDirectoryService = userDirectoryService;
	}

}
