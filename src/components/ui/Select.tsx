type Props = {
    label: string;
    value: string;
    name: string;
    required?: boolean;
    options: {
        value: string;
        label: string;
    }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ label, name, required, options, value, onChange }: Props) {
    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className="text-md mb-2 block font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="h-14 w-full rounded-sm border border-grey-scattered px-3 py-2 focus:border-schiphol-blue"
                required={required}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
