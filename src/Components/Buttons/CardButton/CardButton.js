import "./CardButton.css"

export default function CardButton({buttonHandler, buttonText, buttonStyle}){
    return(
        <button className={buttonStyle} onClick={buttonHandler} >
        {buttonText}
      </button>
    );
}