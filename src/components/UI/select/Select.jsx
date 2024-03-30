import classes from "./Select.module.css"

export default function Select({ options, defaultValue, value, onChange }) {
    return (
        <select className={classes.MySelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}