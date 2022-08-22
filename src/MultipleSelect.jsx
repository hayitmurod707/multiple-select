import { array, func, shape, string } from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';
// active color #0000ff
// multiValue color rgb(239, 240, 243)
// placeholder color #808080
// remove color #ff0000
// text color #000000
// white color #ffffff
const StyledMultiValue = styled.div`
	align-items: center;
	background-color: rgb(239, 240, 243);
	border-radius: 8px;
	display: flex;
	margin: 3px;
	max-width: 100%;
	min-height: 26px;
	padding: 5px;
	& .label {
		font-size: 16px;
		font-weight: 600;
		line-height: 135%;
		margin: 0 6px 0 0;
		white-space: pre-wrap;
		width: calc(100% - 25px);
	}
	& .remove {
		align-items: center;
		background-color: rgba(255, 0, 0, 0.7);
		border-radius: 10px;
		display: flex;
		height: 19px;
		justify-content: center;
		width: 19px;
		&:hover {
			background-color: rgb(255, 0, 0);
		}
	}
`;
const MultiValue = ({ data: { label }, removeProps: { onClick } }) => (
	<StyledMultiValue>
		<div className="label">{label}</div>
		<div className="remove" onClick={onClick}>
			<svg fill="#ffffff" height="14" width="14" viewBox="0 0 20 20">
				<path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
			</svg>
		</div>
	</StyledMultiValue>
);
MultiValue.defaultProps = {
	data: { label: '' },
};
MultiValue.propTypes = {
	data: shape({ label: string }),
	removeProps: shape({ onClick: func }),
};
const IndicatorSeparator = () => null;
const defaultOptions = {
	isMulti: true,
	isSearchable: false,
	maxMenuHeight: 240,
	menuPlacement: 'auto',
	styles: {
		control: styles => ({
			...styles,
			backgroundColor: '#ffffff',
			border: '1px solid #e2e4ea',
			borderRadius: 8,
			boxShadow: 'none',
			color: '#000000',
			cursor: 'pointer',
			minHeight: 48,
			outline: 'none',
			padding: 0,
			width: '100%',
			':hover': {
				border: '1px solid #e2e4ea',
			},
		}),
		placeholder: styles => ({
			...styles,
			color: '#808080',
			fontSize: 16,
			fontWeight: 600,
			margin: '0 0 0 12px',
		}),
		valueContainer: styles => ({
			...styles,
			display: 'flex',
			flex: 'initial',
			overflow: 'auto',
			padding: 2,
			width: 'calc(100% - 66px)',
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
				width: 6,
			},
			'::-webkit-scrollbar-track': {
				backgroundColor: 'transparent',
			},
			'::-webkit-scrollbar-thumb': {
				backgroundColor: '#0000ff',
				borderRadius: 3,
			},
		}),
		option: (styles, { isDisabled }) => ({
			...styles,
			backgroundColor: isDisabled ? '#808080' : '#fffff',
			color: isDisabled ? '#000000' : '#000000',
			cursor: isDisabled ? 'not-allowed' : 'pointer',
			fontSize: 16,
			fontWeight: 600,
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
		noOptionsMessage: styles => ({
			...styles,
			color: '#000000',
			cursor: 'not-allowed',
			fontSize: 15,
			fontWeight: 600,
			height: 48,
			padding: '15px 16px',
			textAlign: 'left',
			width: '100%',
		}),
		indicatorsContainer: styles => ({
			...styles,
			justifyContent: 'flex-end',
			padding: '0 8px',
			width: 66,
		}),
		clearIndicator: styles => ({
			...styles,
			alignItems: 'center',
			backgroundColor: 'rgba(255, 0, 0, 0.7)',
			borderRadius: 11,
			color: '#ffffff',
			display: 'flex',
			height: 22,
			justifyContent: 'center',
			margin: '0 6px 0 0',
			padding: 0,
			width: 22,
			svg: {
				width: 15,
			},
			':hover': {
				backgroundColor: 'rgb(255, 0, 0)',
				color: '#ffffff',
			},
		}),
		dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => ({
			...styles,
			alignItems: 'center',
			backgroundColor: '#0000ff',
			borderRadius: 11,
			color: '#ffffff',
			display: 'flex',
			height: 22,
			justifyContent: 'center',
			margin: 0,
			padding: 0,
			transform: `rotate(${menuIsOpen ? '180deg' : 0})`,
			transformOrigin: 'center',
			transition: '0.4s transform',
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
const MultipleSelect = props => (
	<ReactSelect
		{...props}
		{...defaultOptions}
		components={{ IndicatorSeparator, MultiValue }}
	/>
);
MultipleSelect.defaultProps = {
	noOptionsMessage: () => 'No options',
	options: [],
	placeholder: 'Select options',
	value: [],
};
MultipleSelect.propTypes = {
	noOptionsMessage: func,
	onChange: func.isRequired,
	options: array,
	placeholder: string,
	value: array,
};
export default MultipleSelect;
