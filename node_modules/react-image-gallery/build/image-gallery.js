'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var ImageGallery = (function (_React$Component) {
  _inherits(ImageGallery, _React$Component);

  function ImageGallery(props) {
    _classCallCheck(this, ImageGallery);

    _get(Object.getPrototypeOf(ImageGallery.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentIndex: props.startIndex,
      thumbnailsTranslateX: 0,
      containerWidth: 0
    };
    this._handleResize = this._handleResize.bind(this);
  }

  _createClass(ImageGallery, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.containerWidth !== this.state.containerWidth || prevProps.showThumbnails !== this.props.showThumbnails) {

        // adjust thumbnail container when window width is adjusted
        // when the container resizes, thumbnailsTranslateX
        // should always be negative (moving right),
        // if container fits all thumbnails its set to 0

        this._setThumbnailsTranslateX(-this._getScrollX(this.state.currentIndex > 0 ? 1 : 0) * this.state.currentIndex);
      }

      if (prevState.currentIndex !== this.state.currentIndex) {

        // call back function if provided
        if (this.props.onSlide) {
          this.props.onSlide(this.state.currentIndex);
        }

        // calculates thumbnail container position
        if (this.state.currentIndex === 0) {
          this._setThumbnailsTranslateX(0);
        } else {
          var indexDifference = Math.abs(prevState.currentIndex - this.state.currentIndex);
          var _scrollX = this._getScrollX(indexDifference);
          if (_scrollX > 0) {
            if (prevState.currentIndex < this.state.currentIndex) {
              this._setThumbnailsTranslateX(this.state.thumbnailsTranslateX - _scrollX);
            } else if (prevState.currentIndex > this.state.currentIndex) {
              this._setThumbnailsTranslateX(this.state.thumbnailsTranslateX + _scrollX);
            }
          }
        }
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._thumbnailDelay = 300;
      this._ghotClickDelay = 600;
      this._preventGhostClick = false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleResize();
      if (this.props.autoPlay) {
        this.play();
      }
      window.addEventListener('resize', this._handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._handleResize);
      if (this._intervalId) {
        window.clearInterval(this._intervalId);
        this._intervalId = null;
      }
    }
  }, {
    key: 'slideToIndex',
    value: function slideToIndex(index, event) {
      var slideCount = this.props.items.length - 1;

      if (index < 0) {
        this.setState({ currentIndex: slideCount });
      } else if (index > slideCount) {
        this.setState({ currentIndex: 0 });
      } else {
        this.setState({ currentIndex: index });
      }
      if (event) {
        if (this._intervalId) {
          // user event, reset interval
          this.pause();
          this.play();
        }
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var _this = this;

      if (this._intervalId) {
        return;
      }
      this._intervalId = window.setInterval(function () {
        if (!_this.state.hovering) {
          _this.slideToIndex(_this.state.currentIndex + 1);
        }
      }, this.props.slideInterval);
    }
  }, {
    key: 'pause',
    value: function pause() {
      if (this._intervalId) {
        window.clearInterval(this._intervalId);
        this._intervalId = null;
      }
    }
  }, {
    key: '_wrapClick',
    value: function _wrapClick(func) {
      var _this2 = this;

      if (typeof func === 'function') {
        return function (event) {
          if (_this2._preventGhostClick === true) {
            return;
          }
          func(event);
        };
      }
    }
  }, {
    key: '_touchEnd',
    value: function _touchEnd() {
      var _this3 = this;

      this._preventGhostClick = true;
      this._preventGhostClickTimer = window.setTimeout(function () {
        _this3._preventGhostClick = false;
        _this3._preventGhostClickTimer = null;
      }, this._ghotClickDelay);
    }
  }, {
    key: '_setThumbnailsTranslateX',
    value: function _setThumbnailsTranslateX(x) {
      this.setState({ thumbnailsTranslateX: x });
    }
  }, {
    key: '_handleResize',
    value: function _handleResize() {
      this.setState({ containerWidth: this._imageGallery.offsetWidth });
    }
  }, {
    key: '_getScrollX',
    value: function _getScrollX(indexDifference) {
      if (this.props.disableThumbnailScroll) {
        return 0;
      }
      if (this._thumbnails) {
        if (this._thumbnails.scrollWidth <= this.state.containerWidth) {
          return 0;
        }

        var totalThumbnails = this._thumbnails.children.length;

        // total scroll-x required to see the last thumbnail
        var totalScrollX = this._thumbnails.scrollWidth - this.state.containerWidth;

        // scroll-x required per index change
        var perIndexScrollX = totalScrollX / (totalThumbnails - 1);

        return indexDifference * perIndexScrollX;
      }
    }
  }, {
    key: '_handleMouseOverThumbnails',
    value: function _handleMouseOverThumbnails(index) {
      var _this4 = this;

      if (this.props.slideOnThumbnailHover) {
        this.setState({ hovering: true });
        if (this._thumbnailTimer) {
          window.clearTimeout(this._thumbnailTimer);
          this._thumbnailTimer = null;
        }
        this._thumbnailTimer = window.setTimeout(function () {
          _this4.slideToIndex(index);
          _this4.pause();
        }, this._thumbnailDelay);
      }
    }
  }, {
    key: '_handleMouseLeaveThumbnails',
    value: function _handleMouseLeaveThumbnails() {
      if (this._thumbnailTimer) {
        window.clearTimeout(this._thumbnailTimer);
        this._thumbnailTimer = null;
        if (this.props.autoPlay == true) {
          this.play();
        }
      }
      this.setState({ hovering: false });
    }
  }, {
    key: '_handleMouseOver',
    value: function _handleMouseOver() {
      this.setState({ hovering: true });
    }
  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave() {
      this.setState({ hovering: false });
    }
  }, {
    key: '_getAlignmentClassName',
    value: function _getAlignmentClassName(index) {
      var currentIndex = this.state.currentIndex;
      var alignment = '';
      switch (index) {
        case currentIndex - 1:
          alignment = ' left';
          break;
        case currentIndex:
          alignment = ' center';
          break;
        case currentIndex + 1:
          alignment = ' right';
          break;
      }

      if (this.props.items.length >= 3) {
        if (index === 0 && currentIndex === this.props.items.length - 1) {
          // set first slide as right slide if were sliding right from last slide
          alignment = ' right';
        } else if (index === this.props.items.length - 1 && currentIndex === 0) {
          // set last slide as left slide if were sliding left from first slide
          alignment = ' left';
        }
      }

      return alignment;
    }
  }, {
    key: '_handleImageLoad',
    value: function _handleImageLoad(event) {
      // slide images have an opacity of 0, onLoad the class 'loaded' is added
      // so that it transitions smoothly when navigating to non adjacent slides
      if (event.target.className.indexOf('loaded') === -1) {
        event.target.className += ' loaded';
      }
    }
  }, {
    key: '_handleImageError',
    value: function _handleImageError(event) {
      if (this.props.defaultImage && event.target.src.indexOf(this.props.defaultImage) === -1) {
        event.target.src = this.props.defaultImage;
      }
    }
  }, {
    key: '_hasMinSlidesToShowNav',
    value: function _hasMinSlidesToShowNav() {
      return this.props.items.length >= 2;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var currentIndex = this.state.currentIndex;
      var thumbnailStyle = {
        MozTransform: 'translate3d(' + this.state.thumbnailsTranslateX + 'px, 0, 0)',
        WebkitTransform: 'translate3d(' + this.state.thumbnailsTranslateX + 'px, 0, 0)',
        OTransform: 'translate3d(' + this.state.thumbnailsTranslateX + 'px, 0, 0)',
        msTransform: 'translate3d(' + this.state.thumbnailsTranslateX + 'px, 0, 0)',
        transform: 'translate3d(' + this.state.thumbnailsTranslateX + 'px, 0, 0)'
      };
      var swipePrev = this.slideToIndex.bind(this, currentIndex - 1);
      var swipeNext = this.slideToIndex.bind(this, currentIndex + 1);

      var slides = [];
      var thumbnails = [];
      var bullets = [];

      this.props.items.map(function (item, index) {
        var alignment = _this5._getAlignmentClassName(index);
        var originalClass = item.originalClass ? ' ' + item.originalClass : '';
        var thumbnailClass = item.thumbnailClass ? ' ' + item.thumbnailClass : '';

        var slide = _react2['default'].createElement(
          'div',
          {
            key: index,
            className: 'image-gallery-slide' + alignment + originalClass,
            onClick: _this5._wrapClick(_this5.props.onClick),
            onTouchStart: _this5.props.onClick,
            onTouchEnd: _this5._touchEnd.bind(_this5) },
          _react2['default'].createElement('img', {
            className: _this5.props.server ? 'loaded' : null,
            src: item.original,
            alt: item.originalAlt,
            onLoad: _this5._handleImageLoad,
            onError: _this5._handleImageError }),
          item.description
        );

        if (_this5.props.lazyLoad) {
          if (alignment) {
            slides.push(slide);
          }
        } else {
          slides.push(slide);
        }

        if (_this5.props.showThumbnails) {
          thumbnails.push(_react2['default'].createElement(
            'a',
            {
              onMouseOver: _this5._handleMouseOverThumbnails.bind(_this5, index),
              onMouseLeave: _this5._handleMouseLeaveThumbnails.bind(_this5, index),
              key: index,
              className: 'image-gallery-thumbnail' + (currentIndex === index ? ' active' : '') + thumbnailClass,

              onTouchStart: _this5.slideToIndex.bind(_this5, index),
              onTouchEnd: _this5._touchEnd.bind(_this5),
              onClick: _this5._wrapClick(_this5.slideToIndex.bind(_this5, index)) },
            _react2['default'].createElement('img', {
              src: item.thumbnail,
              alt: item.thumbnailAlt,
              onError: _this5._handleImageError })
          ));
        }

        if (_this5.props.showBullets) {
          bullets.push(_react2['default'].createElement('li', {
            key: index,
            className: 'image-gallery-bullet ' + (currentIndex === index ? 'active' : ''),

            onTouchStart: _this5.slideToIndex.bind(_this5, index),
            onTouchEnd: _this5._touchEnd.bind(_this5),
            onClick: _this5._wrapClick(_this5.slideToIndex.bind(_this5, index)) }));
        }
      });

      return _react2['default'].createElement(
        'section',
        { ref: function (i) {
            return _this5._imageGallery = i;
          }, className: 'image-gallery' },
        _react2['default'].createElement(
          'div',
          {
            onMouseOver: this._handleMouseOver.bind(this),
            onMouseLeave: this._handleMouseLeave.bind(this),
            className: 'image-gallery-content' },
          this._hasMinSlidesToShowNav() ? [this.props.showNav && [_react2['default'].createElement('a', {
            key: 'leftNav',
            className: 'image-gallery-left-nav',
            onTouchStart: swipePrev,
            onTouchEnd: this._touchEnd.bind(this),
            onClick: this._wrapClick(swipePrev) }), _react2['default'].createElement('a', {
            key: 'rightNav',
            className: 'image-gallery-right-nav',
            onTouchStart: swipeNext,
            onTouchEnd: this._touchEnd.bind(this),
            onClick: this._wrapClick(swipeNext) })], _react2['default'].createElement(
            _reactSwipeable2['default'],
            {
              key: 'swipeable',
              onSwipedLeft: swipeNext,
              onSwipedRight: swipePrev },
            _react2['default'].createElement(
              'div',
              { className: 'image-gallery-slides' },
              slides
            )
          )] : _react2['default'].createElement(
            'div',
            { className: 'image-gallery-slides' },
            slides
          ),
          this.props.showBullets && _react2['default'].createElement(
            'div',
            { className: 'image-gallery-bullets' },
            _react2['default'].createElement(
              'ul',
              { className: 'image-gallery-bullets-container' },
              bullets
            )
          ),
          this.props.showIndex && _react2['default'].createElement(
            'div',
            { className: 'image-gallery-index' },
            _react2['default'].createElement(
              'span',
              { className: 'image-gallery-index-current' },
              this.state.currentIndex + 1
            ),
            _react2['default'].createElement(
              'span',
              { className: 'image-gallery-index-separator' },
              this.props.indexSeparator
            ),
            _react2['default'].createElement(
              'span',
              { className: 'image-gallery-index-total' },
              this.props.items.length
            )
          )
        ),
        this.props.showThumbnails && _react2['default'].createElement(
          'div',
          { className: 'image-gallery-thumbnails' },
          _react2['default'].createElement(
            'div',
            {
              ref: function (t) {
                return _this5._thumbnails = t;
              },
              className: 'image-gallery-thumbnails-container',
              style: thumbnailStyle },
            thumbnails
          )
        )
      );
    }
  }]);

  return ImageGallery;
})(_react2['default'].Component);

exports['default'] = ImageGallery;

ImageGallery.propTypes = {
  items: _react2['default'].PropTypes.array.isRequired,
  showThumbnails: _react2['default'].PropTypes.bool,
  showBullets: _react2['default'].PropTypes.bool,
  showNav: _react2['default'].PropTypes.bool,
  showIndex: _react2['default'].PropTypes.bool,
  indexSeparator: _react2['default'].PropTypes.string,
  autoPlay: _react2['default'].PropTypes.bool,
  lazyLoad: _react2['default'].PropTypes.bool,
  slideInterval: _react2['default'].PropTypes.number,
  onSlide: _react2['default'].PropTypes.func,
  onClick: _react2['default'].PropTypes.func,
  startIndex: _react2['default'].PropTypes.number,
  defaultImage: _react2['default'].PropTypes.string,
  disableThumbnailScroll: _react2['default'].PropTypes.bool,
  slideOnThumbnailHover: _react2['default'].PropTypes.bool,
  server: _react2['default'].PropTypes.bool
};

ImageGallery.defaultProps = {
  lazyLoad: true,
  showThumbnails: true,
  showNav: true,
  showBullets: false,
  showIndex: false,
  indexSeparator: ' / ',
  autoPlay: false,
  disableThumbnailScroll: false,
  server: false,
  slideOnThumbnailHover: false,
  slideInterval: 4000,
  startIndex: 0
};
module.exports = exports['default'];