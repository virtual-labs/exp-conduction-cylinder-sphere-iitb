let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <br>
      <p style="text-align:left">
         The thick walled copper sphere has an inside diameter of ${d1_a2} cm and outside diameter of ${d2_a2} cm. <br>
         The inner & outer surface is maintained at ${T1_a2}&deg;C & ${T2_a2}&deg;C, respectively. <br>
         The conductivity K is given by K = 370 - 0.0344T - 0.00145T<sup>2</sup>. <br>
         Find the heat transfer.
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
            \\frac{Q}{4\π}\\int_{r_1}^{r_2}{\\frac{dr}{r^2}} = -\∫_{T_1}^{T_2}{\\left[370 - 0.0344T + T^2\\right]dT}
         $$
      </p>
      <div id="act2-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Q-inp' class='form-control fs-16px' /><span style="display:contents;"> W</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Q();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    d1_a2 = parseFloat(random(1.5, 2.5).toFixed(1));
    d2_a2 = parseFloat(random(4, 4.5).toFixed(1));
    r1_a2 = parseFloat((d1_a2 / 2 / 100).toFixed(4));
    r2_a2 = parseFloat((d2_a2 / 2 / 100).toFixed(4));
    T1_a2 = random1(280, 291);
    T2_a2 = random1(310, 321);
    Q_a2 =
        ((4 * Math.PI * r1_a2 * r2_a2 * K0_a2) / (r2_a2 - r1_a2)) *
            (T1_a2 -
                T2_a2 +
                (a_a2 / 2) * (Math.pow(T1_a2, 2) - Math.pow(T2_a2, 2)) +
                (b_a2 / 3) * (Math.pow(T1_a2, 3) - Math.pow(T2_a2, 3)));
    console.log('d1_a2', d1_a2);
    console.log('d2_a2', d2_a2);
    console.log('r1_a2', r1_a2);
    console.log('r2_a2', r2_a2);
    console.log('T1_a2', T1_a2);
    console.log('T2_a2', T2_a2);
    console.log('Q_a2', Q_a2);
}
function a2_verify_Q() {
    let inp = (document.getElementById('act2-Q-inp'));
    console.log(Q_a2);
    if (!verify_values(parseFloat(inp.value), Q_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q =  ${parseFloat(Q_a2.toFixed(3))} \\ W $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map