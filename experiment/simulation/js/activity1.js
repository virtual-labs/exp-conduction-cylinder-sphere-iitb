let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Conduction (Heat & Mass Transfer): Conduction through cylinder and sphere (Conductivity as a function of temperature)</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>

      <p style="text-align:left">
         The thick walled copper cylinder has an inside diameter of ${d1_a1} cm and outside diameter of ${d2_a1} cm. <br>
         The inner & outer surface is maintained at ${T1_a1}&deg;C & ${T2_a1}&deg;C, respectively. <br>
         The conductivity K is given by K = 370[1-9&times;10<sup>-5</sup>(T-150)]. <br>
         Determine heat loss per unit length.
      </p>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Using Fourier's  Law
      </p>
      <p>
         $$
            \\frac{Q}{A} = - K \\frac{dT}{dr}
         $$
         $$
            \\frac{Q}{2\πL}\∫_{r_1}^{r_2}{ \\frac{dr}{r}} = - \∫_{T_1}^{T_2}{\\left(374.99 + 0.0333T\\right)dT}
         $$
      </p>

      <div id="act1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$\\frac{Q}{L} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-inp' class='form-control fs-16px' /><span style="display:contents;"> W/m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Q();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    d1_a1 = parseFloat(random(1.5, 2.5).toFixed(1));
    d2_a1 = parseFloat(random(4, 4.5).toFixed(1));
    r1_a1 = parseFloat((d1_a1 / 2 / 100).toFixed(4));
    r2_a1 = parseFloat((d2_a1 / 2 / 100).toFixed(4));
    T1_a1 = random1(280, 291);
    T2_a1 = random1(310, 321);
    Q_L_a1 =
        (2 *
            Math.PI *
            (374.99 * (T1_a1 - T2_a1) -
                0.0333 * ((Math.pow(T1_a1, 2) - Math.pow(T2_a1, 2)) / 2))) /
            Math.log(r2_a1 / r1_a1);
    console.log('d1_a1', d1_a1);
    console.log('d2_a1', d2_a1);
    console.log('r1_a1', r1_a1);
    console.log('r2_a1', r2_a1);
    console.log('T1_a1', T1_a1);
    console.log('T2_a1', T2_a1);
    console.log('Q_L_a1', Q_L_a1);
}
function a1_verify_Q() {
    let inp = (document.getElementById('act1-Q-inp'));
    console.log(Q_L_a1);
    if (!verify_values(parseFloat(inp.value), Q_L_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\frac{Q}{L}  =  ${parseFloat(Q_L_a1.toFixed(3))} \\ W/m $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
      
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map