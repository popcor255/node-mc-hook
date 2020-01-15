"use strict";

window.onload = function(){
    var d = 40;
    document.querySelectorAll('.rocket-button').forEach(function (elem) {
    elem.querySelectorAll('.default, .success > div').forEach(function (text) {
        charming(text);
        text.querySelectorAll('span').forEach(function (span, i) {
        span.innerHTML = span.textContent == ' ' ? '&nbsp;' : span.textContent;
        span.style.setProperty('--d', i * d + 'ms');
        span.style.setProperty('--ds', text.querySelectorAll('span').length * d - d - i * d + 'ms');
        });
    });
    elem.addEventListener('click', function (e) {
        e.preventDefault();

        if (elem.classList.contains('animated')) {
        return;
        }

        elem.classList.add('animated');
        elem.classList.toggle('live');
        setTimeout(function () {
        elem.classList.remove('animated');
        }, 2400);
    });
    });
}

function charming(element) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$tagName = _ref.tagName,
        tagName = _ref$tagName === void 0 ? 'span' : _ref$tagName,
        split = _ref.split,
        _ref$setClassName = _ref.setClassName,
        setClassName = _ref$setClassName === void 0 ? function (index) {
      return 'char' + index;
    } : _ref$setClassName;
  
    element.normalize();
    var index = 1;
  
    function inject(element) {
      var parentNode = element.parentNode;
      var nodeValue = element.nodeValue;
      var array = split ? split(nodeValue) : nodeValue.split('');
      array.forEach(function (string) {
        var node = document.createElement(tagName);
        var className = setClassName(index++, string);
  
        if (className) {
          node.className = className;
        }
  
        node.appendChild(document.createTextNode(string));
        node.setAttribute('aria-hidden', 'true');
        parentNode.insertBefore(node, element);
      });
  
      if (nodeValue.trim() !== '') {
        parentNode.setAttribute('aria-label', nodeValue);
      }
  
      parentNode.removeChild(element);
    }
  
    ;
  
    (function traverse(element) {
      // `element` is itself a text node
      if (element.nodeType === 3) {
        return inject(element);
      } // `element` has a single child text node
  
  
      var childNodes = Array.prototype.slice.call(element.childNodes); // static array of nodes
  
      var length = childNodes.length;
  
      if (length === 1 && childNodes[0].nodeType === 3) {
        return inject(childNodes[0]);
      } // `element` has more than one child node
  
  
      childNodes.forEach(function (childNode) {
        traverse(childNode);
      });
    })(element);
  }