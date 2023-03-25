function setREVStartSize(e){

//window.requestAnimationFrame(function() {				 
    window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;	
    window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;	
    try {								
        var pw = document.getElementById(e.c).parentNode.offsetWidth,
            newh;
        pw = pw===0 || isNaN(pw) ? window.RSIW : pw;
        e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
        e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);		
        if(e.layout==="fullscreen" || e.l==="fullscreen") 						
            newh = Math.max(e.mh,window.RSIH);					
        else{					
            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
            for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];					
            e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
            for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
                                
            var nl = new Array(e.rl.length),
                ix = 0,						
                sl;					
            e.tabw = e.tabhide>=pw ? 0 : e.tabw;
            e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
            e.tabh = e.tabhide>=pw ? 0 : e.tabh;
            e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;					
            for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
            sl = nl[0];									
            for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}															
            var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);					
            newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
        }				
        if(window.rs_init_css===undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));					
        document.getElementById(e.c).height = newh+"px";
        window.rs_init_css.innerHTML += "#"+e.c+"_wrapper { height: "+newh+"px }";				
    } catch(e){
        console.log("Failure at Presize of Slider:" + e)
    }		

}


setREVStartSize({c: 'rev_slider_1_1',rl:[1240,1024,778,480],el:[816,700,650,950],gw:[1200,1024,778,480],gh:[816,700,650,950],type:'standard',justify:'',layout:'fullwidth',mh:"0"});
					var	revapi1,
						tpj;
					function revinit_revslider11() {
					jQuery(function() {
						tpj = jQuery;
						revapi1 = tpj("#rev_slider_1_1");
						if(revapi1==undefined || revapi1.revolution == undefined){
							revslider_showDoubleJqueryError("rev_slider_1_1");
						}else{
							revapi1.revolution({
								sliderLayout:"fullwidth",
								visibilityLevels:"1240,1024,778,480",
								gridwidth:"1200,1024,778,480",
								gridheight:"816,700,650,950",
								spinner:"spinner0",
								perspective:600,
								perspectiveType:"global",
								editorheight:"816,700,650,950",
								responsiveLevels:"1240,1024,778,480",
								progressBar: {
									size:5,
									x:0,
									y:0
								},
								navigation: {
									wheelCallDelay:1000,
									onHoverStop:false,
									bullets: {
										enable:true,
										tmp:"",
										style:"hesperiden",
										h_align:"left",
										v_align:"center",
										h_offset:39,
										v_offset:0,
										direction:"vertical",
										space:10
									}
								},
								fallbacks: {
									allowHTML5AutoPlayOnAndroid:true
								},
							});
						}
						
					});
					} // End of RevInitScript
				var once_revslider11 = false;
				if (document.readyState === "loading") {document.addEventListener('readystatechange',function() { if((document.readyState === "interactive" || document.readyState === "complete") && !once_revslider11 ) { once_revslider11 = true; revinit_revslider11();}});} else {once_revslider11 = true; revinit_revslider11();}
					var htmlDivCss = unescape("%23rev_slider_1_1_wrapper%20.hesperiden.tp-bullets%20%7B%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden.tp-bullets%3Abefore%20%7B%0A%09content%3A%27%20%27%3B%0A%09position%3Aabsolute%3B%0A%09width%3A100%25%3B%0A%09height%3A100%25%3B%0A%09background%3Atransparent%3B%0A%09padding%3A10px%3B%0A%09margin-left%3A-10px%3Bmargin-top%3A-10px%3B%0A%09box-sizing%3Acontent-box%3B%0A%20%20%20border-radius%3A8px%3B%0A%20%20%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet%20%7B%0A%09width%3A5px%3B%0A%09height%3A5px%3B%0A%09position%3Aabsolute%3B%0A%09background%3A%20%238e8e93%3B%20%2F%2A%20old%20browsers%20%2A%2F%0A%20%20%20%20background%3A%20-moz-linear-gradient%28top%2C%20%20%238e8e93%200%25%2C%20%238e8e93%20100%25%29%3B%20%2F%2A%20ff3.6%2B%20%2A%2F%0A%20%20%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%20%238e8e93%200%25%2C%238e8e93%20100%25%29%3B%20%2F%2A%20chrome10%2B%2Csafari5.1%2B%20%2A%2F%0A%20%20%20%20background%3A%20-o-linear-gradient%28top%2C%20%20%238e8e93%200%25%2C%238e8e93%20100%25%29%3B%20%2F%2A%20opera%2011.10%2B%20%2A%2F%0A%20%20%20%20background%3A%20-ms-linear-gradient%28top%2C%20%20%238e8e93%200%25%2C%238e8e93%20100%25%29%3B%20%2F%2A%20ie10%2B%20%2A%2F%0A%20%20%20%20background%3A%20linear-gradient%28to%20bottom%2C%20%20%238e8e93%200%25%2C%238e8e93%20100%25%29%3B%20%2F%2A%20w3c%20%2A%2F%0A%20%20%20%20filter%3A%20progid%3Adximagetransform.microsoft.gradient%28%20%0A%20%20%20%20startcolorstr%3D%27%238e8e93%27%2C%20endcolorstr%3D%27%238e8e93%27%2Cgradienttype%3D0%20%29%3B%20%2F%2A%20ie6-9%20%2A%2F%0A%09border%3A1px%20solid%20transparent%3B%0A%09border-radius%3A50%25%3B%0A%09cursor%3A%20pointer%3B%0A%09box-sizing%3Acontent-box%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet%3Ahover%2C%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet.selected%20%7B%0A%09background%3Atransparent%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet-image%20%7B%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet-title%20%7B%0A%7D%0A%0A");
					var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
					if(htmlDiv) {
						htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
					}else{
						var htmlDiv = document.createElement('div');
						htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
						document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
					}


                    var htmlDivCss = unescape("%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-8%22%5D%20.hesperiden%20.tp-bullet%7B%0Awidth%3A%2010px%20%21important%3B%0Aheight%3A%2010px%20%21important%3B%0Aborder%3A%201px%20solid%20%23e5e5e5%20%21important%3B%0A%7D%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-8%22%5D%20.hesperiden%20.tp-bullet%3Ahover%2C%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-8%22%5D%20.hesperiden%20.tp-bullet.selected%7B%0Abackground%3A%20transparent%20%21important%3B%0A%7D%0A%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-1%22%5D%20.hesperiden%20.tp-bullet%7B%0Awidth%3A%2010px%20%21important%3B%0Aheight%3A%2010px%20%21important%3B%0Aborder%3A%201px%20solid%20%23e5e5e5%20%21important%3B%0A%7D%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-1%22%5D%20.hesperiden%20.tp-bullet%3Ahover%2C%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-1%22%5D%20.hesperiden%20.tp-bullet.selected%7B%0Abackground%3A%20transparent%20%21important%3B%0A%7D%0A%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-7%22%5D%20.hesperiden%20.tp-bullet%7B%0Awidth%3A%2010px%20%21important%3B%0Aheight%3A%2010px%20%21important%3B%0Aborder%3A%201px%20solid%20%23e5e5e5%20%21important%3B%0A%7D%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-7%22%5D%20.hesperiden%20.tp-bullet%3Ahover%2C%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-7%22%5D%20.hesperiden%20.tp-bullet.selected%7B%0Abackground%3A%20transparent%20%21important%3B%0A%7D%0A%0A");
					var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
					if(htmlDiv) {
						htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
					}else{
						var htmlDiv = document.createElement('div');
						htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
						document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
					}


                    if(typeof revslider_showDoubleJqueryError === "undefined") {
                        function revslider_showDoubleJqueryError(sliderID) {
                            var err = "<div class='rs_error_message_box'>";
                            err += "<div class='rs_error_message_oops'>Oops...</div>";
                            err += "<div class='rs_error_message_content'>";
                            err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
                            err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
                            err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
                            err += "</div>";
                        err += "</div>";
                            var slider = document.getElementById(sliderID); slider.innerHTML = err; slider.style.display = "block";
                        }
                    }