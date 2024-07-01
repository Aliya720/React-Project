import { CheckboxType } from "./checkbox.type";
import classes from "./checkbox.module.css";

const Checkbox = (props: CheckboxType) => {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    props.setSelectedCategory((prevCategory) =>
      checked
        ? [...prevCategory, value]
        : prevCategory.filter((item) => item !== value)
    );
  };

  return (
    <>
      <form onSubmit={props.onSubmit} className={classes.form}>
        {props.options.map((category, idx) => {
          return (
            <label key={idx} className={classes.dropdownOption}>
              <input
                type="checkbox"
                name="dropdown-grp"
                value={category}
                onChange={handleChangeCheckbox}
              />
              {category}
            </label>
          );
        })}
        <button type="reset" className={classes.actionBtn}>
          clear
        </button>
        <button type="submit" className={classes.actionBtn}>
          submit
        </button>
      </form>
    </>
  );
};

export default Checkbox;
