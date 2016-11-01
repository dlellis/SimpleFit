export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 2
          },
          "end": {
            "line": 14,
            "column": 2
          }
        },
        "moduleName": "simple-fit/templates/trainer.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"class","client");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1rl4Z6ILcLQiePkQDJE273zAnrGj1E5gsUa6qNEiGuj1Jqy38bIbHmg");
        dom.setAttribute(el2,"height","80");
        dom.setAttribute(el2,"widtch","80");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n        Cool graphing and tracking and stuff\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("User Profile");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [7]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element1,0,0);
        morphs[1] = dom.createMorphAt(element1,2,2);
        morphs[2] = dom.createAttrMorph(element2, 'href');
        return morphs;
      },
      statements: [
        ["content","client.firstName",["loc",[null,[7,10],[7,30]]],0,0,0,0],
        ["content","client.lastName",["loc",[null,[7,31],[7,50]]],0,0,0,0],
        ["attribute","href",["concat",["/users/",["get","client.url",["loc",[null,[12,24],[12,34]]],0,0,0,0]],0,0,0,0,0],0,0,0,0]
      ],
      locals: ["client"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.8.2+31ba4c74",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 18,
          "column": 0
        }
      },
      "moduleName": "simple-fit/templates/trainer.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Trainer Home Page");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      var el2 = dom.createTextNode("Client List");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      dom.setAttribute(el1,"class","row-fluid block-grid-3");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
      morphs[1] = dom.createMorphAt(fragment,6,6,contextualElement);
      return morphs;
    },
    statements: [
      ["block","each",[["get","model",["loc",[null,[5,10],[5,15]]],0,0,0,0]],[],0,null,["loc",[null,[5,2],[14,11]]]],
      ["content","outlet",["loc",[null,[17,0],[17,10]]],0,0,0,0]
    ],
    locals: [],
    templates: [child0]
  };
}()));