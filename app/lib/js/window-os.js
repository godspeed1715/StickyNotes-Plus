    //Windows OS window replacement Framework for titlebar less hta application.
    //v0.0.1
    var windowHeight = window.outerHeight;
    var windowWidth = window.outerWidth;
    var windowHeightSaveState = window.outerHeight;
    var windowWidthSaveState = window.outerWidth;
    var windowLeft = top.screenLeft;
    var windowTop = top.screenTop;
    var screenResize = true;
    var activeMove = false;
    $(document).ready(function() {
            //Set default window size 50x50
            var windowHeight = 200;
            var windowWidth = 200;
            //Set window size and asign to variables
            intHorizontal = screen.width
            intVertical = screen.height
                //Center screen at startup
            intLeft = (intHorizontal - windowWidth) / 2
            intTop = (intVertical - windowHeight) / 2
            window.resizeTo(windowWidth, windowHeight)
            window.moveTo(intLeft, intTop)
        })
        //ie workaround
        //$('.title-bar-os').mouseenter(function() {
        //   $('.dropdown').removeClass('hide')
        //}).mouseleave(function() {
        //    $('.dropdown').addClass('hide')
        //});
    var windowActive = true
    window.onblur = function(e) {
        if (e !== undefined) { //ie will have an undefined e here, so this screens them out
            windowActive = false
            $('.dropdown').addClass('hide')
        }
    };
    $(window).focus(function() {
        $('.dropdown').removeClass('hide')
        windowActive = true
    });
    //minimize button
    $('.btn-os-min').on('click', function() {
            fnMin()
                //window.resizeTo(0,0);    
        })
        //maximize button
    $('.btn-os-max').on('click', function() {
        if (window.outerHeight !== screen.availHeight && window.outerWidth !== screen.width) {
            windowHeightSaveState = window.outerHeight;
            windowWidthSaveState = window.outerWidth;
            windowLeft = top.screenLeft;
            windowTop = top.screenTop;
        }
        if (window.outerHeight === screen.availHeight && window.outerWidth === screen.width) {
            window.resizeTo(windowWidthSaveState, windowHeightSaveState)
            window.moveTo(windowLeft, windowTop);
        } else {
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.availHeight);
        }
    })
    $('.title-bar-os:not(.btn-os)').on('dblclick', function() {
            if (window.outerHeight !== screen.availHeight && window.outerWidth !== screen.width) {
                windowHeightSaveState = window.outerHeight;
                windowWidthSaveState = window.outerWidth;
                windowLeft = top.screenLeft;
                windowTop = top.screenTop;
            }
            if (window.outerHeight === screen.availHeight && window.outerWidth === screen.width) {
                window.resizeTo(windowWidthSaveState, windowHeightSaveState)
                window.moveTo(windowLeft, windowTop)
            } else {
                window.moveTo(0, 0);
                window.resizeTo(screen.width, screen.availHeight);
            }
        })
        //close button
    $('.btn-os-close').on('click', function() {
        window.close()
    })

    var move = new Object();
    $('.title-bar-os').on('mousedown', function(e) {
        activeMove = true
        if (screenResize = false) {
            window.onmousemove = ""
        } else if (window.outerHeight === screen.availHeight && window.outerWidth === screen.width) {
            window.onmousemove = ""
        } else if (screenResize = true) {
            move.x = window.event.screenX;
            move.y = window.event.screenY;
            move.winX = window.screenLeft;
            move.winY = window.screenTop;
            window.onmousemove = handleMouseMove;
        }
    }).on('mouseleave', function() {
        if (activeMove) {
            setTimeout(function() {
                activeMove = false
            }, 1000)

        } else { window.onmousemove = "" }
    }).on('mouseenter', function() {
        if (activeMove) {
            setTimeout(function() {
                activeMove = true
            }, 10)
        } else { window.onmousemove = "" }
    }).on('mouseup', function() {
        activeMove = false
        window.onmousemove = ""
    })

    function handleMouseMove(event) {
        if (screenResize === true && activeMove === true) {
            newWinX = (move.winX + (window.event.screenX - move.x));
            newWinY = (move.winY + (window.event.screenY - move.y));
            if (newWinY > (screen.availHeight - 20)) { newWinY = screen.availHeight - 20 };
            window.moveTo(newWinX, newWinY);
        }
        //set window to full height, half width on placement of left or right of screen
        windowEScreenX = window.event.screenX
        windowEScreenY = window.event.screenY
        if (window.event.screenX >= screen.width - 4) {
            setTimeout(
                function(event) {
                    if (windowEScreenX >= screen.width - 4) {
                        if (screenResize === true) {
                            window.moveTo(screen.width / 2, 0);
                            window.resizeTo(screen.width - screen.width / 2, screen.availHeight);
                            screenResize = false;
                            setTimeout(
                                function() {
                                    screenResize = true;
                                }, 1000
                            )
                        }
                    }
                }, 550)
        };
        if (window.event.screenX <= 4) {
            setTimeout(
                function(event) {
                    if (windowEScreenX <= 4) {
                        if (screenResize === true) {
                            window.moveTo(0, 0);
                            window.resizeTo(screen.width - screen.width / 2, screen.availHeight);
                            screenResize = false;
                            setTimeout(
                                function() {
                                    screenResize = true;
                                }, 1000
                            )
                        }
                    }
                }, 550)
        }
        if (window.event.screenY <= 2) {
            setTimeout(
                function(event) {
                    if (windowEScreenY <= 2) {
                        if (screenResize === true) {
                            window.moveTo(0, 0);
                            window.resizeTo(screen.width, screen.availHeight);
                            screenResize = false;
                            setTimeout(
                                function() {
                                    screenResize = true;
                                }, 1000
                            )
                        }
                    }
                }, 550)
        }
    }
    var IE = document.all ? true : false
    if (!IE) document.captureEvents(Event.MOUSEMOVE)
    $('.btn-os-resize').on('mousedown', function(e) {
        if (screenResize = false) {
            window.onmousemove = ""
        } else if (window.outerHeight === screen.availHeight && window.outerWidth === screen.width) {
            window.onmousemove = ""
        } else if (screenResize = true) {
            move.x = window.event.screenX;
            move.y = window.event.screenY;
            move.winX = window.screenLeft;
            move.winY = window.screenTop;
            window.onmousemove = handleWindowResize;
        }
    }).on('mouseleave', function() {
        setTimeout(function() {
            window.onmousemove = ""
        }, 200)
    }).on('mouseup', function() {
        window.onmousemove = ""
    })
    var intX = 0
    var intY = 0
    var handleWindowResize = function(e) {
        intX = event.clientX + document.body.scrollLeft
        intY = event.clientY + document.body.scrollTop
        if (intX > 200 && intY > 200) {
            window.resizeTo(intX + 12, intY + 1);
        }
        return true
    }
