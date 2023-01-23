import { TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface DatePickerProps {
  label: string;
  value: Date | null;
  onChange(newDate: any): void;
  required?: boolean;
}

const FormDatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  required,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        value={value}
        maxDate={new Date(2030, 1, 18)}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            margin="normal"
            required={required}
            name={label}
            id={label}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default FormDatePicker;