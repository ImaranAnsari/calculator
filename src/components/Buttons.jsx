import style from './Button.module.css'
const Buttons = ({ onButtonClick }) => {
    const buttonNames = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "=",
        "9",
        "0",
        ".",
    ];
    return (
        <div className={style.buttonsContainer}>
            {buttonNames.map((item) => (
                <button className={style.button}
                    onClick={() => onButtonClick(item)}>{item}</button>
            ))}
        </div>
    )
}

export default Buttons