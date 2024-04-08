import React from 'react'
import {BsFacebook, BsTiktok} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/profile.php?id=100053624302595' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://www.tiktok.com/@rafiaamohammed1?_r=1&_d=ea46j2c3379i6e&sec_uid=MS4wLjABAAAAM4ZLgH8VMQ36vnlRH_bGHmf8KL33s7I0xC1W846Ji9nA3G9xuMOZ69RV7cjc8NZD&share_author_id=7311682172514911237&sharer_language=en&source=h5_m&u_code=ebm495e6k55cge&timestamp=1712477400&user_id=7318714107196572677&sec_user_id=MS4wLjABAAAAl5kyG-gtJEHi1aWg4GPLZmLJ-MWXmuQ6tgLNW_vOiRbwz4DH1ZyCPVUvimWyORU5&utm_source=more&utm_campaign=client_share&utm_medium=android&share_iid=7318714120429225734&share_link_id=4e3389bf-2801-4c43-a192-8ad8494bda05&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b6880%2Cb5836&social_share_type=5&enable_checksum=1'
              target='_blank' className='text-3xl hover:opacity-70' >
              <BsTiktok/>
              </a> 

     
          
             <a target='_blank' href='mailto:rafiaamohmmed@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons