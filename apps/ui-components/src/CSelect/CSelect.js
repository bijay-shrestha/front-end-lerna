import React, {PureComponent} from 'react';
import Select from "react-select";
import PropTypes from 'prop-types';

class CSelect extends PureComponent {

    render() {
        const {
            options,
            value,
            onChange,
            autoFocus,
            className,
            classNamePrefix,
            isDisabled,
            isMulti,
            isSearchable,
            name,
            placeholder,
            defaultInputValue,
            defaultMenuIsOpen,
            defaultValue,
            menuIsOpen,
            backspaceRemovesValue,
            blurInputOnSelect,
            captureMenuScroll,
            closeMenuOnSelect,
            closeMenuOnScroll,
            components,
            delimiter,
            escapeClearsValue,
            hideSelectedOptions,
            id,
            inputValue,
            inputId,
            isClearable,
            isLoading,
            isOptionDisabled,
            isOptionSelected,
            isRtl,
            minMenuHeight,
            maxMenuHeight,
            menuPlacement,
            menuPosition,
            noOptionsMessage,
            onInputChange,
            onKeyDown,
            onMenuOpen,
            onMenuClose,
            openMenuOnClick,
            pageSize,
            styles,
            theme
        } = this.props;
        return (
            <>
                <Select
                    autoFocus={autoFocus}
                    backspaceRemovesValue={backspaceRemovesValue}
                    blurInputOnSelect={blurInputOnSelect}
                    captureMenuScroll={captureMenuScroll}
                    className={className}
                    classNamePrefix={classNamePrefix}
                    closeMenuOnScroll={closeMenuOnScroll}
                    closeMenuOnSelect={closeMenuOnSelect}
                    components={components}
                    defaultInputValue={defaultInputValue}
                    defaultMenuIsOpen={defaultMenuIsOpen}
                    defaultValue={defaultValue}
                    delimiter={delimiter}
                    escapeClearsValue={escapeClearsValue}
                    hideSelectedOptions={hideSelectedOptions}
                    id={"select".concat(id)}
                    inputId={inputId}
                    inputValue={inputValue}
                    isClearable={isClearable}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isMulti={isMulti}
                    isOptionDisabled={isOptionDisabled}
                    isOptionSelected={isOptionSelected}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    maxMenuHeight={maxMenuHeight}
                    menuIsOpen={menuIsOpen}
                    menuPlacement={menuPlacement}
                    menuPosition={menuPosition}
                    minMenuHeight={minMenuHeight}
                    name={name}
                    noOptionsMessage={noOptionsMessage}
                    onChange={onChange}
                    onInputChange={onInputChange}
                    onKeyDown={onKeyDown}
                    onMenuClose={onMenuClose}
                    onMenuOpen={onMenuOpen}
                    openMenuOnClick={openMenuOnClick}
                    options={options}
                    pageSize={pageSize}
                    placeholder={placeholder}
                    styles={styles}
                    theme={theme}
                    value={value}
                />
            </>
        );
    }
}

CSelect.defaultProps = {
    backspaceRemovesValue: true, // wont work if isClearable set to false
    closeMenuOnSelect: true,
    isClearable: true,
    isSearchable: true,
    isMulti: false,
    onChange: () => {
    },
    onKeyDown: true,
    openMenuOnClick: true,
    options: [],
    placeholder: "Select..."
};

CSelect.propTypes = {
    autoFocus: PropTypes.bool,
    backspaceRemovesValue: PropTypes.bool,
    blurInputOnSelect: PropTypes.bool,
    captureMenuScroll: PropTypes.bool,
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
    closeMenuOnScroll: PropTypes.bool || PropTypes.func,
    closeMenuOnSelect: PropTypes.bool,
    components: PropTypes.object,
    defaultInputValue: PropTypes.string,
    defaultMenuIsOpen: PropTypes.bool,
    defaultValue: PropTypes.object || PropTypes.arrayOf(PropTypes.object),
    delimiter: PropTypes.string,
    escapeClearsValue: PropTypes.bool,
    hideSelectedOptions: PropTypes.bool,
    inputId: PropTypes.string,
    inputValue: PropTypes.string,
    id: PropTypes.string,
    isClearable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isMulti: PropTypes.bool,
    isOptionDisabled: PropTypes.bool,
    isOptionSelected: PropTypes.bool,
    isRtl: PropTypes.bool,
    isSearchable: PropTypes.bool,
    maxMenuHeight: PropTypes.number,
    menuIsOpen: PropTypes.bool,
    menuPlacement: PropTypes.string,//auto,bottom,top
    menuPosition: PropTypes.string,//absolute fixed
    minMenuHeight: PropTypes.number,
    name: PropTypes.string,
    noOptionsMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMenuClose: PropTypes.func,
    onMenuOpen: PropTypes.func,
    openMenuOnClick: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.any.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    ),
    pageSize: PropTypes.number,
    placeholder: PropTypes.string,
    styles: PropTypes.object,
    theme: PropTypes.object,
    value: PropTypes.any,
};

export default CSelect;