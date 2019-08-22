import React, {PureComponent} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

class CScrollbar extends PureComponent {

    render() {
        const {
            autoHeight,
            autoHeightMax,
            autoHeightMin,
            autoHide,
            autoHideDuration,
            autoHideTimeout,
            children,
            hideTracksWhenNotNeeded,
            id,
            onScroll,
            onScrollFrame,
            onScrollStart,
            onScrollStop,
            onUpdate,
            renderThumbHorizontal,
            renderThumbVertical,
            renderTrackHorizontal,
            renderTrackVertical,
            renderView,
            thumbMinSize,
            thumbSize,
            universal,
        } = this.props;
        return (
            <Scrollbars
                autoHeight={autoHeight}
                autoHeightMax={autoHeightMax}
                autoHeightMin={autoHeightMin}
                autoHide={autoHide}
                autoHideDuration={autoHideDuration}
                autoHideTimeout={autoHideTimeout}
                children={children}
                hideTracksWhenNotNeeded={hideTracksWhenNotNeeded}
                id={"scrollbar_".concat(id)}
                onScroll={onScroll}
                onScrollFrame={onScrollFrame}
                onScrollStart={onScrollStart}
                onScrollStop={onScrollStop}
                onUpdate={onUpdate}
                renderThumbHorizontal={renderThumbHorizontal}
                renderThumbVertical={renderThumbVertical}
                renderTrackHorizontal={renderTrackHorizontal}
                renderTrackVertical={renderTrackVertical}
                renderView={renderView}
                thumbMinSize={thumbMinSize}
                thumbSize={thumbSize}
                universal={universal}
            />
        )
    }
}

export default CScrollbar;