import {Box, Button, Container, Grid, TextField} from '@mui/material';
import {useForm, SubmitHandler} from 'react-hook-form';
import './App.css'





type FormValue={
    email:string,
    password:string,
}

const LoginForm=()=> {
    const {register, handleSubmit, formState:{errors},} = useForm<FormValue> ()
 //   const [data ,setData] = useState({email:'', password:''})
    const onSubmit: SubmitHandler<FormValue>=(data)=>{
        console.log("final data", data);
        alert(data.email)


    }

    return(

        <div className='bg_color'>
            <Container className='form-wrapper'>2
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={16} md={12}>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box component="section" sx={{ p: 2, color:'#1d395d', textAlign:'left' }}>
                                <h1>Login</h1>
                                </Box>
                                <Box>

                                    <TextField fullWidth 
                                        label="Email"
                                        placeholder='Enter Email'
                                        {
                                           ...register('email',{
                                            required: "Email is required",
                                            pattern:{
                                                value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                message:"Invalid Email"   
                                           }
                                           })
                                        }   
                                     />

                                     {
                                        errors.email && (
                                            <p className='error-msg'>{errors.email.message}</p>
                                        )
                                     }




                                    <TextField fullWidth 
                                        label="Password"
                                        type='password'
                                        placeholder='Enter Password'{
                                            ...register('password',
                                            {
                                                required: "Password is required",
                                                minLength:{
                                                    value:10,
                                                    message:"Password Should be atlease 10 char"
                                                }
                                               
                                            })
                                        }
                                    style={{marginTop:'20px'}}/>
                                    {
                                        errors.password && (
                                            <p className='error-msg'>{errors.password.message}</p>
                                        )
                                    }
                                    <Button style={{marginTop:'20px'}} type='submit' fullWidth variant='contained' > Submit</Button>

                                </Box>
                          

                            </form>
                            
                        </Grid>
                        
                    </Grid>
                </div>
            </Container>
        </div>
    )

}

export default LoginForm;