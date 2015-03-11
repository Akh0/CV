'use strict';

describe('Directive: minHeaderScroll', function () {

  // load the directive's module
  beforeEach(module('cv2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<min-header-scroll></min-header-scroll>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the minHeaderScroll directive');
  }));
});