import "../Styles/Submit.css";

const Submit = ({text}) => {
    const click = () => {
        const btn = document.querySelector("#btn");
        const btnText = document.querySelector("#btnText");
        btnText.innerHTML = "Done";
        btn.classList.add("active");
    };

    return (
        <button 
            type="submit"
            id="btn" 
            onClick={click}>
            <p id="btnText">{text}</p>
            <div class="checked">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                </svg>
            </div>
        </button>
    );
}

export default Submit;