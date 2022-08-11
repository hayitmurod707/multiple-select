import { array, func } from 'prop-types';
import React from 'react';
import Select from 'react-select';
const defaultOptions = {
	isMulti: true,
	isSearchable: false,
	maxMenuHeight: 240,
	menuPlacement: 'auto',
	styles: {
		option: (styles, { isDisabled }) => ({
			...styles,
			backgroundColor: isDisabled ? '#808080' : '#fffff',
			color: isDisabled ? '#000000' : '#000000',
			cursor: isDisabled ? 'not-allowed' : 'pointer',
			fontSize: 15,
			height: 48,
			overflow: 'hidden',
			padding: '15px 16px',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			width: '100%',
			':hover': {
				backgroundColor: isDisabled ? '#808080' : '#0000ff',
				color: isDisabled ? '#000000' : '#ffffff',
			},
		}),
		control: styles => ({
			...styles,
			backgroundColor: '#ffffff',
			border: '1px solid #e2e4ea',
			borderRadius: 8,
			boxShadow: 'none',
			color: '#000000',
			cursor: 'pointer',
			height: 48,
			minWidth: 100,
			outline: 'none',
			padding: 0,
			width: '100%',
			':hover': {
				border: '1px solid #e2e4ea',
			},
		}),
		menu: styles => ({
			...styles,
			backgroundColor: '#fffff',
			border: 'none',
			borderRadius: 8,
			boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
			margin: 0,
			overflow: 'hidden',
			padding: 0,
		}),
		menuList: styles => ({
			...styles,
			padding: 0,
			'::-webkit-scrollbar': {
				width: 7,
			},
			'::-webkit-scrollbar-track': {
				backgroundColor: 'transparent',
			},
			'::-webkit-scrollbar-thumb': {
				backgroundColor: '#0000ff',
				borderRadius: 4,
			},
		}),
		valueContainer: styles => ({
			...styles,
			display: 'flex',
			flexWrap: 'nowrap',
			fontSize: 15,
			height: 48,
			overflow: 'scroll',
			padding: '4px 5px',
			width: 'calc(100% - 66px)',
			flex: 'initial',
		}),
		multiValue: styles => ({
			...styles,
			flexWrap: 'nowrap',
		}),
		indicatorsContainer: styles => ({
			...styles,
			padding: '0 8px',
			width: 66,
			justifyContent: 'flex-end',
		}),
		dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => ({
			...styles,
			alignItems: 'center',
			color: '#ffffff',
			backgroundColor: '#0000ff',
			display: 'flex',
			height: 22,
			margin: 0,
			padding: 0,
			transform: `rotate(${menuIsOpen ? '180deg' : '0'})`,
			transformOrigin: 'center',
			justifyContent: 'center',
			transition: '0.4s transform',
			width: 22,
			borderRadius: 11,
			svg: {
				width: 16,
			},
			':hover': {
				color: '#ffffff',
			},
		}),
		clearIndicator: styles => ({
			...styles,
			alignItems: 'center',
			color: '#ffffff',
			backgroundColor: '#0000ff',
			display: 'flex',
			height: 22,
			margin: '0 6px 0 0',
			padding: 0,
			justifyContent: 'center',
			borderRadius: 11,
			width: 22,
			svg: {
				width: 16,
			},
			':hover': {
				color: '#ffffff',
			},
		}),
	},
};
const MultipleSelect = props => {
	const NoOptionsMessage = () => 'No options';
	const IndicatorSeparator = () => null;
	return (
		<Select
			{...defaultOptions}
			{...props}
			placeholder="Select options"
			components={{ NoOptionsMessage, IndicatorSeparator }}
		/>
	);
};
MultipleSelect.defaultProps = {
	value: [],
	array: [],
};
MultipleSelect.propTypes = {
	value: array,
	options: array,
	onChange: func.isRequired,
};
export default MultipleSelect;
