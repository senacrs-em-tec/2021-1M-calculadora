const milhaphInput = document.getElementById("Milha por hora");
const noInput = document.getElementById("Nó");
const quilometroInput = document.getElementById("Quilômetro por hora");
const pesporsInput = document.getElementById("Pés por segundo");
const metroporsInput = document.getElementById("Metro por segundo");


const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (ez) {
        let value = parseFloat(ez.target.value);
        
        switch (ez.target.name) {
            case "Milha por hora":
                pesporsInput.value = (value * 1.467);
                metroporsInput.value = value / 2.237;
                quilometroInput.value = value * 1.609;
                noInput.value = value/1.151;
                break;
            case "Nó":
                pesporsInput.value = (value * 1.688);
                metroporsInput.value = value / 1.944;
                quilometroInput.value = value * 1.852;
                milhaphInput.value = value * 1.151;
                break;
            case "Quilômetro por hora":
                pesporsInput.value = (value / 1.097);
                metroporsInput.value = value / 3.6;
                milhaphInput.value = value / 1.609;
                noInput.value = value/1.852;
                break;
                case "Metro por segundo":
                    pesporsInput.value = (value *3.281);
                    quilometroInput.value = value * 3.6;
                    milhaphInput.value = value *2.237;
                    noInput.value = value * 1.944;
                    break;
                    case "Pés por segundo":
                        metroporsInput.value = value / 3.6;
                        quilometroInput.value = value * 1.097;
                        milhaphInput.value = value / 1.467;
                        noInput.value = value /1.688;
                        break;
        }
    });
    
}
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }