import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadAPI: Promise<any>;
  feature: any;

  constructor() { 
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  ngOnInit(): void {
    this.functionNr1();
  }

  functionNr1() {
    var features = ["Earn", "Buy", "Convert", "Invest", "Pay","Receive", "Save", "Sell", "Send", "Spend", "Trade"];
    var count = 0;
    setInterval(e => {
      var randomNumber = Math.floor(Math.random()*11);
      count = (count + randomNumber) % features.length;
      this.feature = features[count];
      console.log(this.feature);
    }, 1500);
  }

  public loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = [
          "./../assets/vendor/owlcarousel/js/owl.carousel.min.js",
          "./../assets/js/plugins/owl-carousel-init.js"
        ];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
  }

}
