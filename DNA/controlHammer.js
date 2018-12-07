        AFRAME.registerComponent("foo",{
        init:function() {
          var element = document.querySelector('body');
          this.marker = document.querySelector('a-marker')
          var model = document.getElementById('dnaA');
          var model2 = document.getElementById('dnaB')
          this.markerVisible = false
      var hammertime = new Hammer(element);
      var pinch = new Hammer.Pinch();
      hammertime.add(pinch); // add it to the Manager instance
      
      hammertime.on('pan', (ev) => {
        if (!this.markerVisible) { return;}
        let rotation = model.getAttribute("rotation")
        switch(ev.direction) {
          case 2:
            rotation.y = rotation.y + 4
            break;
          case 4:
            rotation.y = rotation.y - 4
            break;
          case 8:
            rotation.x = rotation.x + 4
            break;
          case 16:
            rotation.x = rotation.x - 4
            break;
          default:
            break;
        }
        model.setAttribute("rotation", rotation)
		model2.setAttribute("rotation", rotation)
      });
      
      hammertime.on("pinch", (ev) => {
      	if (!this.markerVisible) { return; }
		  let initialScale = model.getAttribute("scale")
          let scale = {x:ev.scale, y:ev.scale, z:ev.scale}
          model.setAttribute("scale", initialScale + scale);
		  model2.setAttribute("scale", initialScale + scale);

      });
        },
        tick:function() {
          if (this.marker && this.marker.object3D.visible == true) {
            this.markerVisible = true
            console.log(this.markerVisible)
          } else {
            this.markerVisible = false
        }
        }
      });
