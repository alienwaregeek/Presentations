!function(a,b){Meetup.MustacheTemplates===a&&(Meetup.MustacheTemplates={}),Meetup.MustacheTemplates.chapstick=b.extend(Meetup.MustacheTemplates.chapstick||{},{event:{rsvpEmptyPanel:"<div class='prompt-panel doc-content-big questions'>\n	{{{output}}}\n	<ul class='inlineErrorMsgs display-none'>\n		<li class='inlineErrorMsg'></li>\n	</ul>\n	<button class='primary margin-top next'>{{btnText}}</button>\n	<span class='margin-top spin' />\n</div>",rsvpBoxYesNo:'<div id="rsvpBoxContainer">\n\n	{{! Registration for aliens}}\n	{{#hasRegForm}}\n		{{> chapstick.event.rsvpJoinAndDues}}\n	{{/hasRegForm}}\n\n	{{! Registration for non-members}}\n	{{#hasJoinForm}}\n		{{> chapstick.event.rsvpJoinAndDues}}\n	{{/hasJoinForm}}\n\n	{{#hasPayDuesToRsvp}}\n		{{> chapstick.event.rsvpJoinAndDues}}\n	{{/hasPayDuesToRsvp}}\n\n	{{#hasRespondedLayout}}\n		<div id="rsvp-mine" class="rsvp-callout-rsvp{{myRsvpClass}} doc-content">\n			<h3>\n				{{myRsvpText}}\n				{{#isWaitlistRsvp}}{{#Rsvp.hasGuests}} <span>(+{{Rsvp.guests}})</span>{{/Rsvp.hasGuests}} {{/isWaitlistRsvp}}\n			</h3>\n			{{#canEditRsvp}}\n				<a href="#" class="rsvp-change" aria-label="Change your RSVP">\n					{{trnChange}}\n				</a>\n			{{/canEditRsvp}}\n		</div>\n	{{/hasRespondedLayout}}\n\n	{{#hasYesNoLayout}}\n		<div id="rsvpBox" class="doc-content">\n			<h3>\n				{{^Event.waitlistActive}}{{trnAreYouGoing}}{{/Event.waitlistActive}}\n				{{#Event.waitlistActive}}{{trnJoinTheWaitlist}}{{/Event.waitlistActive}}\n			</h3>\n			<label id="primaryRsvpLabel" for="rsvp{{^Event.waitlistActive}}Yes{{/Event.waitlistActive}}{{#Event.waitlistActive}}Waitlist{{/Event.waitlistActive}}" class="display-none">\n				{{^Event.waitlistActive}}{{trnAreYouGoing}}{{/Event.waitlistActive}}\n				{{#Event.waitlistActive}}{{trnJoinTheWaitlist}}{{/Event.waitlistActive}}\n				{{trnYes}}\n			</label>\n			<button class="primary" id="rsvp{{^Event.waitlistActive}}Yes{{/Event.waitlistActive}}{{#Event.waitlistActive}}Waitlist{{/Event.waitlistActive}}" aria-labelledby="primaryRsvpLabel">{{trnYes}}</button>\n			<label id="secondaryRsvpLabel" for="rsvpNo" class="display-none">\n				{{^Event.waitlistActive}}{{trnAreYouGoing}}{{/Event.waitlistActive}}\n				{{#Event.waitlistActive}}{{trnJoinTheWaitlist}}{{/Event.waitlistActive}}\n				{{trnNo}}\n			</label>\n			<button class="secondary" id="rsvpNo" aria-labelledby="secondaryRsvpLabel">{{trnNo}}</button>\n		</div>\n	{{/hasYesNoLayout}}\n\n	{{#displayClosed}}\n		<div id="rsvp-mine" class="rsvp-callout-rsvpno doc-content">\n			<h3>{{trnRsvpsClosed}}</h3>\n		</div>\n	{{/displayClosed}}\n\n	{{#hasNotifyMe}}\n		<div id="notify" class="padding-all">\n			{{^isWaitlistRsvp}}\n				<p>{{trnSpotMayOpen}}</p>\n				<label id="notifyMeLabel" for="notifyOn" class="display-none">\n					{{trnSpotMayOpen}}\n					{{trnNotifyMe}}\n				</label>\n				<button id="notifyOn" class="primary small margin-none" aria-labelledby="notifyMeLabel">{{trnNotifyMe}}</button>\n			{{/isWaitlistRsvp}}\n			{{#isWaitlistRsvp}}\n				<p>{{#Event.eventFull}}{{trnFullBeingNotified}}{{/Event.eventFull}}{{^Event.eventFull}}{{trnBeingNotified}}{{/Event.eventFull}}</p>\n				<label id="notifyMeOffLabel" for="notifyOff" class="display-none">\n					{{#Event.eventFull}}{{trnFullBeingNotified}}{{/Event.eventFull}}{{^Event.eventFull}}{{trnBeingNotified}}{{/Event.eventFull}}\n					{{trnTurnOff}}\n				</label>\n				<button id="notifyOff" class="small margin-none" aria-labelledby="notifyMeOffLabel">{{trnTurnOff}}</button>\n			{{/isWaitlistRsvp}}\n		</div>\n	{{/hasNotifyMe}}\n	<ul class="inlineErrorMsgs display-none">\n		<li class="inlineErrorMsg"></li>\n	</ul>\n</div>\n',rsvpJoinAndDues:'<div class="doc-content">\n	<h3>{{trnWantToAttend}}</h3>\n\n	{{! Logged in, member + group has dues}}\n	{{#hasPayDuesToRsvp}}\n		<a href="{{payDuesUrl}}" id="event-join" class="button primary no-margin">\n			{{joinButtonText}}\n		</a>\n		<p class="align-center dues-members-only">\n				<a href="{{payDuesUrl}}" class="small muted">Dues-paying members only</a>\n		</p>\n	{{/hasPayDuesToRsvp}}\n\n	{{! Member of the group, but didn\'t pay dues and grace period has expired }}\n	{{#didntPayDues}}\n		<a href="{{payDuesUrl}}" id="event-join" class="button primary margin-top">\n			{{joinButtonText}}\n		</a>\n	{{/didntPayDues}}\n\n	{{^didntPayDues}}\n		{{^hasPayDuesToRsvp}}\n			<a id="event-join" href="{{joinActionUrl}}?eventId={{Event.eventToken}}&joinFrom=event&response=3" class="button primary margin-top {{#Member.isAlien}} J_signupLink J_onClick omnCamp omnrg_joinrsvp topNavJoinus {{/Member.isAlien}}">\n				{{joinButtonText}}\n			</a>\n		{{/hasPayDuesToRsvp}}\n	{{/didntPayDues}}\n\n</div>\n',rsvpBox:'<div id="rsvp-mine" class="{{#rsvpYes}}rsvp-callout-rsvpyes doc-content{{/rsvpYes}}{{#rsvpNo}}rsvp-callout-rsvpno doc-content{{/rsvpNo}}{{#rsvpWaitlist}}rsvp-callout-rsvpwaitlist doc-content{{/rsvpWaitlist}}">\n	<h3>{{#rsvpYes}}{{transRsvpYes}}{{/rsvpYes}}{{#rsvpNo}}{{transRsvpNo}}{{/rsvpNo}}{{#rsvpWaitlist}}{{transRsvpWaitlist}}{{/rsvpWaitlist}}</h3>\n		{{#rsvpYes}}<a href="#" class="rsvp-change">{{transChangeRsvp}}</a>{{/rsvpYes}}\n		{{#rsvpWaitlist}}<a href="#" class="rsvp-change">{{transChangeMind}}</a>{{/rsvpWaitlist}}\n		{{#rsvpNo}}\n			{{#rsvpSpots}}\n				<a href="#" class="rsvp-change">{{transChangeRsvp}}</a>\n			{{/rsvpSpots}}\n			{{#waitlistSpots}}\n				<a href="#" class="rsvp-change">{{transChangeMind}}</a>\n			{{/waitlistSpots}}\n		{{/rsvpNo}}\n	</a>\n</div>\n',rsvpStillGoing:'<div class="toggle" role="select" tabindex="-1">\n	<h3 class="margin-bottom" tabindex="-1">{{trnTitle}}</h3>\n	<div class="segmented-control" style="width:100%;" role="radiogroup">\n\n		<div class="segmented-control-segment">\n			<input type="radio" name="toggleRadio" value="{{rsvpValue}}" id="toggleRadioYes" class="segmented-control-input" {{#valueYes}}checked="checked" aria-checked="true"{{/valueYes}} role="radio" aria-label="{{trnTitle}}">\n			<label for="toggleRadioYes" class="bold segmented-control-button">Yes</label>\n		</div>\n\n		<div class="segmented-control-segment">\n			<input type="radio" name="toggleRadio" value="2" id="toggleRadioNo" class="segmented-control-input" {{#valueNo}}checked="checked" aria-checked="true"{{/valueNo}} role="radio" aria-label="{{trnTitle}}">\n			<label for="toggleRadioNo" class="bold segmented-control-button">No</label>\n		</div>\n\n	</div>\n</div>\n',eventSurveyQuestions:'<div class="survey-question-wrap{{#isExisting}} isExisting{{/isExisting}}" data-questionId="{{newQuestionId}}">\n	<label class="bold inline" for="{{inputId}}">{{labelText}}</label>\n	<a class="removeSurveyQuestion small valign-middle"><i class="icon-circle-minus"></i>&nbsp;{{removeCopy}}</a>\n	<div class="input">\n		<input type="text" id="{{inputId}}" name="{{inputId}}" data-dependson="pre_event_survey_yes" class="surveyQuestion isRadioSelector hasMaxLen maxChars250{{#isError}} error{{/isError}}" {{#inputValue}}value="{{inputValue}}"{{/inputValue}} />\n	</div>\n</div>\n',rsvpRefundAgreement:'<div class="refundAgreement{{^requiresPayment}} display-none{{/requiresPayment}}" tabindex="-1">\n	<p>{{{checkboxTxt}}}</p>\n	<div class="display-none refundAgreementDetails">\n		{{#displayHeader}}\n			<p>{{header}}</p>\n		{{/displayHeader}}\n		{{#refundAvailable}}\n			<ul>\n				{{#refundItems}}\n					<li class="padding-none">\n						{{text}}\n					</li>\n				{{/refundItems}}\n			</ul>\n		{{/refundAvailable}}\n		<p>{{paymentsToOrganizer}}</p>\n	</div>\n</div>\n',rsvpQuestionSingle:"<div class=\"questions\">\n	<h3 id=\"questionLabel{{index}}\" class='question-label leading-bottom' tabindex=\"-1\">{{#index}}{{index}}. {{/index}}{{question}}</h3>\n	<div class=\"question-wrapper clearfix\">\n		<textarea data-questionid='{{id}}' data-initialvalue='{{memberAnswer}}' type='text' placeholder=\"{{placeholder}}\" class='span-100 hasMaxLen maxChars250 question-textarea' aria-describedby='questionLabel{{index}}'>{{memberAnswer}}</textarea>\n	</div>\n</div>\n",rsvpGuests:"<div class='guests' role=\"select\" tabindex=\"-1\">\n	<h3 class='margin-bottom' tabindex=\"-1\">\n		{{anyGuests}}\n	</h3>\n	<div class='j-guestsControl'></div>\n</div>\n"}})}(void 0,jQuery);