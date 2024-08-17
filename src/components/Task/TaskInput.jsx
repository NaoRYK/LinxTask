import PropTypes from 'prop-types';

const TaskInput = ({ 
    label, 
    type = 'text', 
    value = '', 
    onChange, 
    placeholder = '', 
    required = false, 
    checked = false, 
    options = [], 
    min, 
    inputStyles = '', 
    labelStyles = '', 
    darkestColor = '#000000', 
    darkenedColor = '#333333'
}) => {
    if (type === 'select') {
        return (
            <label className={labelStyles} style={{ color: darkestColor }}>
                {label}
                <select
                    value={value}
                    onChange={onChange}
                    required={required}
                    multiple
                    className={`w-[200px] ${inputStyles}`}
                    style={{ backgroundColor: darkenedColor, color: darkestColor }}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        );
    }

    if (type === 'checkbox') {
        return (
            <label className={labelStyles} style={{ color: darkestColor }}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className={inputStyles}
                    style={{ accentColor: darkenedColor }}
                />
                {label}
            </label>
        );
    }

    if (type === 'color') {
        return (
            <label className={labelStyles} style={{ color: darkestColor }}>
                {label}
                <input
                    type="color"
                    value={value}
                    onChange={onChange}
                    className={inputStyles}
                    style={{ backgroundColor: value }} // El color de fondo del input color se establece automáticamente
                />
            </label>
        );
    }

    if (type === 'datetime-local') {
        return (
            <label className={labelStyles} style={{ color: darkestColor }}>
                {label}
                <input
                    type="datetime-local"
                    value={value}
                    onChange={onChange}
                    required={required}
                    min={min}
                    className={inputStyles}
                    style={{ backgroundColor: darkenedColor, color: darkestColor }}
                />
            </label>
        );
    }

    return (
        <label className={labelStyles} style={{ color: darkestColor }}>
            {label}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                min={type === 'date' ? min : undefined}
                className={inputStyles}
                style={{ backgroundColor: darkenedColor, color: darkestColor }}
            />
        </label>
    );
};

TaskInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'textarea', 'date', 'checkbox', 'color', 'select', 'datetime-local']),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.array
    ]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    checked: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ),
    min: PropTypes.string,
    inputStyles: PropTypes.string,
    labelStyles: PropTypes.string,
    darkestColor: PropTypes.string,
    darkenedColor: PropTypes.string
};

export default TaskInput;
