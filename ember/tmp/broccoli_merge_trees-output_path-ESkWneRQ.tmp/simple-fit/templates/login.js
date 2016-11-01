export default Ember.HTMLBars.template((function() {
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
          "line": 23,
          "column": 0
        }
      },
      "moduleName": "simple-fit/templates/login.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment(" Eventually add some if statements ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("form");
      dom.setAttribute(el1,"class","form-group");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","form-group");
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-md-4 col-md-offset-4");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      var el5 = dom.createTextNode("Username");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      var el5 = dom.createTextNode("Password");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("br");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      dom.setAttribute(el4,"type","submit");
      dom.setAttribute(el4,"class","btn");
      var el5 = dom.createTextNode("Log in!");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var element1 = dom.childAt(element0, [1, 1]);
      var morphs = new Array(3);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(element1,3,3);
      morphs[2] = dom.createMorphAt(element1,7,7);
      return morphs;
    },
    statements: [
      ["element","action",["login"],["on","submit"],["loc",[null,[2,25],[2,55]]],0,0],
      ["inline","input",[],["value",["subexpr","@mut",[["get","username",["loc",[null,[8,20],[8,28]]],0,0,0,0]],[],[],0,0],"class","form-control","type","text"],["loc",[null,[8,6],[8,63]]],0,0],
      ["inline","input",[],["value",["subexpr","@mut",[["get","password",["loc",[null,[13,20],[13,28]]],0,0,0,0]],[],[],0,0],"class","form-control","type","password"],["loc",[null,[13,6],[13,67]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));