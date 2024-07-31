type Props = {
    label: string;
    value: string;
    placeholder: string;
    name: string;
    required?: boolean;
    type?: "text";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, name, placeholder, type = "text", required, value, onChange }: Props) {
    return (
        <div className="w-full">
            <label htmlFor={name} className="text-md mb-2 block font-medium text-gray-900">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="h-14 w-full rounded-sm border border-grey-scattered px-3 py-2 focus:border-schiphol-blue"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

export default Input;
