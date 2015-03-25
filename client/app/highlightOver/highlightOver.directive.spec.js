'use strict';

describe('Directive: highlightOver', function () {

  // load the directive's module
  beforeEach(module('cv2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<highlight-over></highlight-over>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the highlightOver directive');
  }));
});