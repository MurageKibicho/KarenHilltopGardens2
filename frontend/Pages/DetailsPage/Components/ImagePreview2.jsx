import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 99%;
margin-left: 1%;
margin-bottom: 1%;
width: 55%;
margin-left: 15%;
display:block;
border-radius: 5px;
@media ${DeviceType.tablet} 
{
    width: 98%;
    margin-left: 1%;
}
`;
const ImageContainer = styled.img`
width:100px;
aspect-ratio: 16/9;
border-radius: 10px;
`;

const LegendText = styled.div`
font-size: 1em;
color: green;
margin-bottom: 2px;
`;
 
const ImagePreview2 = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};


return(
    <Container>
        <Carousel showIndicators={false}>
            {ImageItems.map(function(data)
            {
                return (
                <div>
                    <LegendText>{data.legend}</LegendText>
                    <ImageContainer src={data.image} />
                </div>
                    )
            })}
            
            
        </Carousel>
    </Container>
)
}
const ImageItems = 
[
{legend: "Front view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411476663_3495552764107042_2489870398800377722_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6db5ScfjE8cAX_Vfr1Z&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfDKjLvB6Rntc-WUSzSKfqdo8tHRlq9oMkfeEYEz4hCpUQ&oe=6581FDB4"},
{legend: "Side view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411477036_3495552854107033_2783817953993599933_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kZle2q8O8QYAX9Gqn0E&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfApDvxTzY4tXntVfunBVQfw93F30HdN_bBBMRDhw2d4rw&oe=6580F601"},
{legend: "Estate view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411476798_3495552720773713_6274829454325763055_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=2jPG850hDBsAX8c2Xnc&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfCmvyvu5SJiMFyeU_DkHgRWcpojVMA-T_-NeBxnDaiBdg&oe=6581B479"},
{legend: "Top view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411486076_3495552667440385_2807313944278343351_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=iYgyaLnOWA8AX_gANSE&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfD2bAM2_29u3pR76L4671VjwWhDI3fgybWLFfrYoZqxag&oe=658285B0"},
{legend: "Gate view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411468082_3495552497440402_5020755145714190125_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Hf1VGHMiIm8AX8bvyiD&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfBchFjR_Df9mgqXDy30JEEvcPrctNsnuL8x3xkc_OFXqg&oe=65814DCA"},
{legend: "Side view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411462362_3495552410773744_4512269194361668278_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=c8TKPKiswfkAX9bABuP&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfBk5MTuGtLzCry6138pM-P4ej0HOZOgwS3YQa9VacwKTw&oe=6581A89F"},
{legend: "Gate view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/410125766_3495552397440412_5459373946524184807_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TdlSKvd3gJIAX9R1CQq&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfB2p8P8xiTWyT1kVbnVrUilGsbgyI3PTw8sXIfoG00QBg&oe=65825AC2"},
{legend: "Estate view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411455276_3495552330773752_6108369083690853021_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=jB7nimlSulkAX-xxAT5&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfAERYHPpfvWAb4FYC6VDxAbMQ857QUhe8UH5bcDurKh5Q&oe=6581C525"},
{legend: "Estate view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411494347_3495552244107094_8425944083813679856_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XCP7RIzzy_oAX-lT_q5&_nc_oc=AQkuzzKPlirc7g-yta1j0Jua8j39bPknL7XaG5e4gBnnz7Ox7XLQ61osr5N9LQMYmmA&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfD_JuiakfKdWYcrYE87I-OA2m4FpHOoVL_HTrUitiJJFA&oe=65825411"},
{legend: "Side view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/410128956_3495552250773760_5657706688888148116_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EzcDNfFqRlIAX-ek_Px&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfDwFPfb9qy9IKIcnfp8Nf7tauj1ZvAOWtjRuT-SlQvKoQ&oe=6581FEF6"},
{legend: "Community view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411496272_3495552227440429_217009191823966738_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=-khxL3HCmsoAX_E3aqL&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfA7QgT6n0JcjIGruw1Wb80Ry7SuWbUh8_N5P_qBn4qYzQ&oe=65822338"},
{legend: "Backyard view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411456206_3495552210773764_8558153365107043723_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=5AK7mihFbK0AX9nHayl&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBj2CbQIc_BjdCMihwjGXsI4HgjjChYgKzXPqVlfMnQeA&oe=6581ADB0"},
{legend: "Lawn view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411462262_3495552207440431_1082639789657664939_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=YRigVwcKosYAX8PIjZd&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBf383raDknaEWACStQ2vbU5czFQUbnhUvIevKEs9XReg&oe=6581522B"},
{legend: "Aerial view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411478772_3495552117440440_1537099971208475480_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=QgTWCpAJ7v4AX8YnUzq&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfANWFVTWl5DrIqF4-uHAQtmnWEHYL9UUD71QW1xjWQdUQ&oe=6580CBFA"},
{legend: "Forest view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411467382_3495552057440446_8037910811754544297_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=wO9PDX6QrrYAX-Yd85Z&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfA1PSKp1qLky3UV4vUclTG_PUTFiXbD2jrnphvT2Dk59g&oe=658282D7"},
{legend: "Common Space view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411462363_3495552034107115_8427319318976781561_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=WKrKvBimy1sAX-LaSFD&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfB4WmB64sglD56dircqGLsGoh6mzRvM-XVGyXWqIcvf3A&oe=6581BB77"},
{legend: "Entrance view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411471038_3495552030773782_9206584200198963062_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=wBVQTINfY68AX-BY0Oh&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfA2s7QUrPolla3_qoPKg8VVlMhEDOcNpegk5JAUaHVD7Q&oe=65825122"},
{legend: "Entrance view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411527017_3495552007440451_5729648200735439348_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=mqQahAkTdy0AX9LHtyh&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfCGa1ke9WG2UW7639z_7IVF0qDFEUYkeK_T7_Hzc22HvQ&oe=65818329"},
{legend: "Entrance view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411455265_3495551987440453_7367274067860102412_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LS_V938P9IwAX_db4Cv&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfCVV3Id-XXNsuadpbpwmJn_HT0GAetWgTkJ7WDKPTBixA&oe=65816BBF"},
{legend: "Top view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411455277_3495551860773799_5018137619640549848_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LiJn9vDTdqgAX8ZtIix&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfCV7Oy7nxnnSbovN4Fr_yQR4CI43dD2Xg48ThR3jckCWw&oe=65820FD0"},
{legend: "Aerial view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411482299_3495551814107137_5278086800355968613_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EIAHshqz6kUAX_jJg9t&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBh39ZeFcsr0IRNvA7Z9R_uLriCE9fRYzAsCTs59PRyew&oe=6580F4CC"},
{legend: "Aerial view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411494735_3495551834107135_2872628096950612440_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=BVnf7r_SEfgAX9YGnyg&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfDm9sgTdJ9ZMK0aRt0ybuh6N_fTi71EUAOcUJctAoAdxw&oe=6581669D"},
{legend: "Bathroom view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411482329_3495551820773803_1317058506290632902_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=5lXwJtzxx-MAX_Ejm02&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfC5JJwIrgv1B5IVXMldHKvhqyuNu2jPhjlHtLmZLF007w&oe=65810136"},
{legend: "Kitchen view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411475674_3495551794107139_53828465682675268_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TAryRpVu36cAX8DJQjs&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfAPupDtI84KXZi14MrITxFyzXq5Wi66gn1RaeRVbYjisA&oe=65824A2D"},
{legend: "Wooden floor view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411467370_3495551790773806_341617252834441764_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kp8TjmuwkvoAX-CRpf7&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfAqbLmY_sGBwTiFVNinrTLpCq1NEb9CYRVEusxqmyFzxw&oe=6582A97D"},
{legend: "Bathroom view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411494586_3495551617440490_1520692336481988306_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LJEtXSA8tE0AX-n5TBw&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfCKMz5qyaBo_qwuWFlllorCbI24YdkVtPDOswujiBnLWQ&oe=6582827E"},
{legend: "Aerial view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411476311_3495552630773722_7236140327753499128_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FTBpkkNyS7gAX-Jb3GN&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfCiNXkgFC_E_oL3q80LPmxKQ7U3GlXbNCXK1dIo8mYVFQ&oe=6581BAC3"},
{legend: "Aerial view", image:"https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/411455921_3495552560773729_8494818816780690933_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=N30X0oxX94IAX-w1ixP&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfAVABPbiRofG6DYsgwV6YeHpBd-hf6nxTtPWLOkLfYlBw&oe=6580CAB8"},
{legend: "Entrance view", image:"https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/411468082_3495552497440402_5020755145714190125_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Hf1VGHMiIm8AX8bvyiD&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfBchFjR_Df9mgqXDy30JEEvcPrctNsnuL8x3xkc_OFXqg&oe=65814DCA"},

];



export default ImagePreview2