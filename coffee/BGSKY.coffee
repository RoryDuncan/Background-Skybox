class BGSKY 

  constructor: (URL)->
    if @find() is true 
      if URL isnt undefined or null
        @background = URL 
        @set()
    else console.log "BGSKY.js: "

  el: null

  find: ->
    return true if $('.BGSKYBOX').length > 0
    return false if $('.BGSKYBOX').length is 0

  set: ->
    if @find() is true and @background isnt undefined or null
      $('.BGSKYBOX').css
        "background-color" : "#fff"
        "background-image": "url(" + @background + ")"
      @getMousePositions()
      return
    else console.log "Cannot add styles"

  mouse:
    x: 0
    y: 0
  setBackground: (URL) ->
    @background = URL
    @set()
  getMousePositions: () ->
    root = @
    mouse = @mouse
    $(document).mousemove (e) ->
      mouse.x = (e.pageX  / window.innerWidth) * 100
      mouse.y = (e.pageY  / window.innerHeight) * 100
      root.setBackgroundPosition()
    return
  movement: 8
  inverse: false
  
  setBackgroundPosition: ->

    if @inverse is true
      $('.BGSKYBOX').css
        "background-position" : ( (1-@mouse.x) / @movement) + "% " + ( (1-@mouse.y) / @movement) + "%"
    else $('.BGSKYBOX').css
     "background-position" : ( @mouse.x / @movement ) + "% " + ( @mouse.y / @movement ) + "%"
  background: null

$(document).ready ->

  BGSKY = new BGSKY()

