!function(a){void 0===a.data(document.body,"topic-widget")&&a.data(document.body,"topic-widget",{});var b={contents:['<div class="margin-bottom">','<h3 data-topicid="{{topicId}}">{{name}}</h3>',"{{#HAS_HEADER_SUBTEXT}}","<p>","{{{HEADER_SUBTEXT}}}","</p>","{{/HAS_HEADER_SUBTEXT}}","</div>","{{#NEEDS_SHOW_NEARBY_GROUPS}}",'<div class="other-meetups leading-top margin-bottom">','<p class="bold">',"{{{WIDGET_BODY_HEADER}}}","</p>","{{#nearbyGroups}}",'<div class="figureset">','<div class="figureset-figure">','<a class="mem-photo-small__TRACKING_CODE__" href="{{chapter_link}}">',"{{#photo_urls}}",'<img src="{{thumb}}" class="D_verticalMiddle" />',"{{/photo_urls}}","{{^photo_urls}}",'<img src="{{NOBODIES}}" />',"{{/photo_urls}}","</a>","</div>",'<div class="figureset-description padding-left">','<a class="groupname__TRACKING_CODE__" href="{{chapter_link}}">',"{{name}}","</a>","</div>","</div>","{{/nearbyGroups}}","</div>","{{/NEEDS_SHOW_NEARBY_GROUPS}}","{{#FOOTER_INTERESTS}}",'<div class="align-center leading-top topic-widget-footer{{#IF_NO_BODY}} no-body{{/IF_NO_BODY}}">','<a class="__TRACKING_CODE__ add-topic-lightly" href="#" data-topicid="{{topicId}}"></a>',"</div>","{{/FOOTER_INTERESTS}}","{{#FOOTER_REGISTRATION}}",'<div class="align-center leading-top topic-widget-footer{{#IF_NO_BODY}} no-body{{/IF_NO_BODY}}">','<a class="__TRACKING_CODE__ add-topic-lightly" href="#" data-topicid="{{topicId}}" data-topic="{{urlkey}}"></a>',"</div>","{{/FOOTER_REGISTRATION}}"].join(""),throbber:'<div class="loader"></div>',lightButton:['<span class="lightly-copy"><span class="icon-xs {{SPRITE_CLASS}}">&nbsp;</span> {{COPY}}</span>'].join("")};a.fn.topicWidget=function(c){var d={className:"topic-widget",placement:"right",rootClassName:"topic-widget-root",rootIdPrefix:"topic-widget-root-",calloutIdPrefix:"topic-widget-container-",trackingCode:"sj57"},e=a(this),f=null,g=null,h=null,i=a(".J_loginLink.headerLogin");if(0===e.length)return!1;a.extend(d,c||{}),f=[" omnCamp omngj_",d.trackingCode].join("");var j=function(c){var d=a(c),e=d.data("topicid"),g=a.data(document.body,"topic-widget")[e];if(g)h.innerHTML=g.contents,l(g.data.subscribed);else{h.innerHTML=b.throbber;var i={method:"getAlertTopicStats",arg_topicId:e,arg_lat:(_.isUndefined(Member.lat)?Chapter.lat:Member.lat)||Meetup.Geo.lat,arg_lon:(_.isUndefined(Member.lon)?Chapter.lon:Member.lon)||Meetup.Geo.lon,arg_radius:_.isUndefined(Member.radius)?25:Member.radius,arg_zip:(_.isUndefined(Member.zip)?Chapter.zip:Member.zip)||Meetup.Geo.zip,arg_country:(_.isUndefined(Member.country)?Chapter.country:Member.country)||Meetup.Geo.country,arg_language:Meetup.Language};a.ajax({dataType:"json",url:Chapter.id>0?Meetup.URL.chapterapi:Meetup.URL.api,data:i,error:function(){h.innerHTML="Sorry, we are currently unable to retrieve data."},success:function(c){var d=m(c),i=Mustache.render(b.contents,d);i=i.replace(/__TRACKING_CODE__/g,f),h.innerHTML=i,g={data:c,contents:i},a.data(document.body,"topic-widget")[e]=g,l(c.subscribed),pluginObj.widgetPopulated()}})}},k=function(c,d){var e,f={};d?(f.SPRITE_CLASS="icon-plus",f.COPY=Meetup.Copy.addToYourInterests):(f.SPRITE_CLASS="icon-minus",f.COPY=Meetup.Copy.removeFromYourInterests),e=Mustache.render(b.lightButton,f),c.html(e),c.data("add",d),a(document.body).off("click",".popover .add-topic-lightly",n),a(document.body).on("click",".popover .add-topic-lightly",n)},l=function(b){var c,d=parseInt(g.find("h3").data("topicid"),10),e=g.find(".add-topic-lightly"),f=g.find(".topic-widget-footer");i.length>0||Member.id>0?(c=-1===a.inArray(d,Meetup.Topic.subscribed)?"true"!==b:!1,k(e,c),f.show()):f.hide()},m=function(b){var c=a.extend({},b);c.FOLLOW_THIS_TOPIC=Meetup.Copy.addToYourInterests;var e=parseInt(c.nearbyGroupCount,10),f=parseInt(c.groupCount,10),g=[],h=[" omnCamp omngj_",d.trackingCode].join("");if(isNaN(e)&&(e=0,c.nearbyGroupCountFmt=0),isNaN(f)&&(f=0,c.groupCountFmt=0),f&&(g[g.length]=f>1?Mustache.render(Meetup.Copy.xGroupsGlobal,{COUNT:c.groupCountFmt,HREF:'href="http://'+c.urlkey+'.meetup.com"'}):Mustache.render(Meetup.Copy.oneGroupGlobal,{COUNT:1,HREF:'href="http://'+c.urlkey+'.meetup.com"'})),g.length){c.HAS_HEADER_SUBTEXT=!0;var i=h;c.HEADER_SUBTEXT=g.join("<br />").replace(/__TRACKING_CODE__/g,i)}return e>0&&b.nearbyGroups&&b.nearbyGroups.length?(c.NEEDS_SHOW_NEARBY_GROUPS=!0,c.IF_NO_BODY=!1,e&&(c.WIDGET_BODY_HEADER=e>1?Mustache.render(Meetup.Copy.xGroupsNearby,{COUNT:c.nearbyGroupCountFmt,HREF:'href="'+c.nearbyGroupUrl+'"',TRACKING_CLASS:h}):Mustache.render(Meetup.Copy.oneGroupNearby,{COUNT:1,HREF:'href="'+c.nearbyGroupUrl+'"',TRACKING_CLASS:h}))):(c.NEEDS_SHOW_NEARBY_GROUPS=!1,c.IF_NO_BODY=!0),0===Member.id?c.FOOTER_REGISTRATION=!0:c.FOOTER_INTERESTS=!0,c.NOBODIES=Meetup.Data.icon_nobodies,c},n=function(b){b.preventDefault();var c=a(b.currentTarget),d=c.closest(".popover").find("h3").data("topicid"),e=-1===a.inArray(d,Meetup.Topic.subscribed);if(0!==Member.id)e?Meetup.Topic.addAlertTopic(d,function(){Meetup.Tracking.trackingServerTrack({code:"th_add"}),k(c,!1)}):Meetup.Topic.removeAlertTopic(d,function(){Meetup.Tracking.trackingServerTrack({code:"th_remove"}),k(c,!0)});else{var f=c.data("topic"),g="http://www.meetup.com/subscribe/?";if(i.length){var h=[g,"topic=",f,"&returnUri=",encodeURIComponent(location.href)].join("");a('#loginForm input[name="returnUri"]').val(h),a('#baseSignUp input[name="returnUri"]').val(location.href),a('#baseSignUp input[name="c"]').val(""),a('#baseSignUp input[name="urlkey"]').val(""),a('#baseSignUp input[name="number"]').val(""),i.get(0).click()}}};new Meetup.InfoWidget(e,function(a,b){this.$infoContainer.addClass("topic-widget-container"),h=this.$infoContainer[0],g=this.$infoContainer.parent(),pluginObj=this,j(b)},d)}}(jQuery);