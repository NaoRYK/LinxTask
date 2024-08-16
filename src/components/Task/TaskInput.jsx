import PropTypes from 'prop-types';

const TaskInput = ({ label, type = 'text', value = '', onChange, placeholder = '', required = false, checked = false, options = [], min }) => {
    if (type === 'select') {
        return (
            <label>
                {label}
                <select
                    value={value}
                    onChange={onChange}
                    required={required}
                    multiple
                    className='w-[200px]'
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
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                {label}
            </label>
        );
    }

    if (type === 'color') {
        return (
            <label>
                {label}
                <input
                    type="color"
                    value={value}
                    onChange={onChange}
                />
            </label>
        );
    }

    if (type === 'datetime-local') {
        return (
            <label>
                {label}
                <input
                    type="datetime-local"
                    value={value}
                    onChange={onChange}
                    required={required}
                    min={min} // Para el caso de datetime-local, puede ser útil
                />
            </label>
        );
    }

    return (
        <label>
            {label}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                min={type === 'date' ? min : undefined}
            />
        </label>
    );
};

TaskInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'textarea', 'date', 'checkbox', 'color', 'select', 'datetime-local']), // Añadido datetime-local
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.array // Para el caso del select múltiple
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
    min: PropTypes.string // Añadido para el caso del input de fecha y datetime-local
};

export default TaskInput;
