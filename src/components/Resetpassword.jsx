const Resetpassword = () => {

    return (
<div>
    <h1>Reset Password</h1>
<div>
    <input type="text" name="phoneno or email" id=""  placeholder="phno or email"/>
    <input type="password" placeholder="Password" id="pwd"/>
    <input type="password" placeholder=" Re-enter-password" id="pwd"/>
   <button>send otp</button>
</div>
<div>
    <input type="text" placeholder="otp" />
    <button>Resend</button>
</div>
</div>
      );
}
 
export default Resetpassword;