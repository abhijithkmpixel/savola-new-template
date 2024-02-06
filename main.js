$(document).ready(function () {
    $('#disclaimer_trigger').click(function () {
        $('body').append(`
                <div class="disclaimer__popup__outer" id="disclaimer_popup">
              <div class="disclaimer__popup__overlay"></div>
              <div class="disclaimer__popup__contentbox">
                <h4>${$('html').attr('dir') !== 'rtl' ? 'Disclaimer' : 'إخلاء مسؤولية'}</h4>
                <div class="disclaimer__content">
                ${$('html').attr('dir') !== 'rtl' ?
                '<p>The following pages contain information relating to a proposed transaction by the Savola Group Company ("Savola").</p><p>This information is not addressed to residents of certain countries based on the applicable securities law regulations in their jurisdictions. However, it is addressed to the eligible investors as per the Saudi Capital Market rules and regulations; any investment or investment activity to which this website and the information contained herein relate are available only to those eligible investors; persons who are not eligible investors should not take any action on the basis of these materials and should not act or rely on them.</p><p>No representation or warranty, express or implied, is made as to, and no reliance should be placed by any person for any purpose on the information contained in this website, accuracy, completeness, or correctness, or fairness of the information contained in this website. The information in this website is subject to change, update, revision, verification and amendment and such information may change materially without notice. Nonetheless, Savola is under no obligation to update or keep the current information contained in this website updated.</p><p>Savola assumes no responsibility if there is a violation of applicable law and regulations by any person. Therefore, if you are not eligible investor as per the CMA rules and regulations, you are not permitted to view the materials on this website or are in any doubt as to whether you are permitted to view these materials, please exit this webpage.</p><p>Access to electronic versions of these materials is being made available on this webpage by Savola in good faith and for information purposes only and should be taken in this context and do not constitute any solicitation or advice to participate in the transaction.</p>'
                :
                '<p>تحتوي الصفحات التالية على معلومات تتعلق بالعملية المحتملة لمجموعة صافولا ("صافولا").</p><p>هذه المعلومات ليست موجهة إلى المقيمين في بعض الدول وفقاً لقوانين وأنظمة الأوراق المالية في تلك الدول، إلا انها موجهة إلى المستثمرين الذين تسمح لهم قوانين وأنظمة هيئة السوق المالية السعودية بالمشاركة في هذه العملية. عليه، فإن أي استثمار أو نشاط استثماري يرتبط به هذا الموقع الإلكتروني والمعلومات الواردة فيه سيكون متاحًا لهؤلاء المستثمرين. وبالتالي، يتوجب على الأشخاص الذين ليسوا مستثمرين مؤهلين الامتناع عن اتخاذ أي إجراء على أساس هذه المعلومات والامتناع أيضًا عن التصرف بناءً عليها أو الاعتماد عليها.</p><p>لا تشكل المعلومات المنشورة على هذا الموقع أي إقرار أو ضمان، صريحًا كان أم ضمنيًا، ولأي غرض، بشأن دقة أو اكتمال أو صحة أو عدالة هذه المعلومات، كما لا ينبغي لأي شخص الاعتماد عليها. إن المعلومات الواردة في هذا الموقع قابلة للتغيير والتحديث والمراجعة والتدقيق والتعديل، حيث يمكن أن تتغير هذه المعلومات تغيراً جوهريًا دون إشعار مسبق. إن مجموعة صافولا غير ملزمة بتحديث أو الاستمرار في تحديث المعلومات الواردة في هذا الموقع.</p><p>لا تتحمل صافولا أي مسؤولية إذا كان هناك أي مخالفة للقوانين واللوائح المعمول بها من قبل أي شخص. وبناء عليه، إذا لم تكن مستثمرا مسموح لك بحسب أنظمة هيئة السوق المالية السعودية، فإنه غير مسموح لك بالاطلاع على المحتوى المتاح على هذه الصفحة، أو إذا كان لديك أي شك بشأن ما إذا كان مسموحًا لك بالاطلاع على هذا المحتوى، فيرجى الخروج من هذه الصفحة.</p><p>تم نشر وإتاحة هذه المعلومات من قبل صافولا في هذه النسخة الإلكترونية بحسن نية ولأغراض التوضيح والاطلاع فقط. وعليه، ينبغي فهمها في هذا السياق، ولا تُعد بمثابة توصية أو نصيحة للمشاركة في هذه العملية.</p>'
            }
                  </div>
                <p>${$('html').attr('dir') !== 'rtl' ? 'By clicking "Confirm" you confirm and certify that you have read and understood the foregoing, and hereby make the certifications above and agree to comply with all of the above restrictions.' : 'بالضغط على خيار "تأكيد"، فإنك تؤكد بأنك قد قرأت وفهمت ما سبق، وبهذا تقر وتوافق على الامتثال لجميع القيود المذكورة أعلاه.'}</p>

                <button id="i_agree">${$('html').attr('dir') !== 'rtl' ? 'Confirm' : 'تأكيد'}</button>
              </div>
            </div>
              `)
        $('body').css({ 'overflow': 'hidden' });
        $('#i_agree').click(function () {
            $('body').css({ 'overflow': 'auto' });
            localStorage.setItem('DISCLAIMER', true);
            $('.disclaimer__popup__outer').remove();
        })
    })
    //   var myLocalStorageVar = localStorage.getItem('DISCLAIMER');
    //   let quick__navigation__links__outer = document.querySelector('.quick__navigation__links__outer')
    //   if (quick__navigation__links__outer) {
    //     if (!myLocalStorageVar) {
    //       // $('.disclaimer__popup__outer').css({ 'display': 'flex' });
    //       $('body').append(`
    //         <div class="disclaimer__popup__outer" id="disclaimer_popup">
    //       <div class="disclaimer__popup__overlay"></div>
    //       <div class="disclaimer__popup__contentbox">
    //         <h4>${$('html').attr('dir') !== 'rtl' ? 'Disclaimer' : 'إخلاء مسؤولية'}</h4>
    //         <div class="disclaimer__content">
    //         ${$('html').attr('dir') !== 'rtl' ?
    //           '<p>The following pages contain information relating to a proposed transaction by the Savola Group Company ("Savola").</p><p>This information is not addressed to residents of certain countries based on the applicable securities law regulations in their jurisdictions. However, it is addressed to the eligible investors as per the Saudi Capital Market rules and regulations; any investment or investment activity to which this website and the information contained herein relate are available only to those eligible investors; persons who are not eligible investors should not take any action on the basis of these materials and should not act or rely on them.</p><p>No representation or warranty, express or implied, is made as to, and no reliance should be placed by any person for any purpose on the information contained in this website, accuracy, completeness, or correctness, or fairness of the information contained in this website. The information in this website is subject to change, update, revision, verification and amendment and such information may change materially without notice. Nonetheless, Savola is under no obligation to update or keep the current information contained in this website updated.</p><p>Savola assumes no responsibility if there is a violation of applicable law and regulations by any person. Therefore, if you are not eligible investor as per the CMA rules and regulations, you are not permitted to view the materials on this website or are in any doubt as to whether you are permitted to view these materials, please exit this webpage.</p><p>Access to electronic versions of these materials is being made available on this webpage by Savola in good faith and for information purposes only and should be taken in this context and do not constitute any solicitation or advice to participate in the transaction.</p>'
    //           :
    //           '<p>تحتوي الصفحات التالية على معلومات تتعلق بالعملية المحتملة لمجموعة صافولا ("صافولا").</p><p>هذه المعلومات ليست موجهة إلى المقيمين في بعض الدول وفقاً لقوانين وأنظمة الأوراق المالية في تلك الدول، إلا انها موجهة إلى المستثمرين الذين تسمح لهم قوانين وأنظمة هيئة السوق المالية السعودية بالمشاركة في هذه العملية. عليه، فإن أي استثمار أو نشاط استثماري يرتبط به هذا الموقع الإلكتروني والمعلومات الواردة فيه سيكون متاحًا لهؤلاء المستثمرين. وبالتالي، يتوجب على الأشخاص الذين ليسوا مستثمرين مؤهلين الامتناع عن اتخاذ أي إجراء على أساس هذه المعلومات والامتناع أيضًا عن التصرف بناءً عليها أو الاعتماد عليها.</p><p>لا تشكل المعلومات المنشورة على هذا الموقع أي إقرار أو ضمان، صريحًا كان أم ضمنيًا، ولأي غرض، بشأن دقة أو اكتمال أو صحة أو عدالة هذه المعلومات، كما لا ينبغي لأي شخص الاعتماد عليها. إن المعلومات الواردة في هذا الموقع قابلة للتغيير والتحديث والمراجعة والتدقيق والتعديل، حيث يمكن أن تتغير هذه المعلومات تغيراً جوهريًا دون إشعار مسبق. إن مجموعة صافولا غير ملزمة بتحديث أو الاستمرار في تحديث المعلومات الواردة في هذا الموقع.</p><p>لا تتحمل صافولا أي مسؤولية إذا كان هناك أي مخالفة للقوانين واللوائح المعمول بها من قبل أي شخص. وبناء عليه، إذا لم تكن مستثمرا مسموح لك بحسب أنظمة هيئة السوق المالية السعودية، فإنه غير مسموح لك بالاطلاع على المحتوى المتاح على هذه الصفحة، أو إذا كان لديك أي شك بشأن ما إذا كان مسموحًا لك بالاطلاع على هذا المحتوى، فيرجى الخروج من هذه الصفحة.</p><p>تم نشر وإتاحة هذه المعلومات من قبل صافولا في هذه النسخة الإلكترونية بحسن نية ولأغراض التوضيح والاطلاع فقط. وعليه، ينبغي فهمها في هذا السياق، ولا تُعد بمثابة توصية أو نصيحة للمشاركة في هذه العملية.</p>'
    //         }
    //           </div>
    //         <p>${$('html').attr('dir') !== 'rtl' ? 'By clicking "Confirm" you confirm and certify that you have read and understood the foregoing, and hereby make the certifications above and agree to comply with all of the above restrictions.' : 'بالضغط على خيار "تأكيد"، فإنك تؤكد بأنك قد قرأت وفهمت ما سبق، وبهذا تقر وتوافق على الامتثال لجميع القيود المذكورة أعلاه.'}</p>

    //         <button id="i_agree">${$('html').attr('dir') !== 'rtl' ? 'Confirm' : 'تأكيد'}</button>
    //       </div>
    //     </div>
    //       `)
    //       $('body').css({ 'overflow': 'hidden' });
    //     }
    //     $('#i_agree').click(function () {
    //       $('body').css({ 'overflow': 'auto' });
    //       localStorage.setItem('DISCLAIMER', true);
    //       $('.disclaimer__popup__outer').remove();
    //     })
    //   }
    //   $('.overview__slider__mutli').slick({
    //     infinite: false,
    //     slidesToShow: 3,
    //     rtl: $('html').attr('dir') === 'rtl', // Use jQuery to get the 'dir' attribute
    //     slidesToScroll: 1, // Keep slidesToScroll positive regardless of RTL
    //     nextArrow: `<button class="slick__btn slick__nxt">
    //       <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <line x1="0.969824" y1="10.3314" x2="20.2187" y2="10.3314" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M12.9006 1.67871L21.5978 10.4383L12.9006 19.198" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    //       </svg>
    //     </button>`,
    //     prevArrow: `<button class="slick__btn slick__prev">
    //       <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21" width="23" height="21">
    //         <title>icons-svg</title>
    //         <style>
    //           .s0 { fill: none;stroke: #114d69;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.8 } 
    //         </style>
    //         <path id="Layer" class="s0" d="m22.6 10.9h-19.2"/>
    //         <path id="Layer" fill-rule="evenodd" class="s0" d="m10.7 19.5l-8.7-8.7 8.7-8.8"/>
    //       </svg>
    //     </button>`,
    //     responsive: [
    //       {
    //         breakpoint: 990,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       },
    //       {
    //         breakpoint: 580,
    //         settings: {
    //           slidesToShow: 1,
    //         }
    //       }
    //     ]

    //   });
    //   $('.overview__slider').slick({
    //     infinite: false,
    //     slidesToShow: 1,
    //     rtl: $('html').attr('dir') === 'rtl', // Use jQuery to get the 'dir' attribute
    //     slidesToScroll: 1, // Keep slidesToScroll positive regardless of RTL
    //     nextArrow: `<button class="slick__btn slick__nxt">
    //       <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <line x1="0.969824" y1="10.3314" x2="20.2187" y2="10.3314" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M12.9006 1.67871L21.5978 10.4383L12.9006 19.198" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    //       </svg>
    //     </button>`,
    //     prevArrow: `<button class="slick__btn slick__prev">
    //       <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21" width="23" height="21">
    //         <title>icons-svg</title>
    //         <style>
    //           .s0 { fill: none;stroke: #114d69;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.8 } 
    //         </style>
    //         <path id="Layer" class="s0" d="m22.6 10.9h-19.2"/>
    //         <path id="Layer" fill-rule="evenodd" class="s0" d="m10.7 19.5l-8.7-8.7 8.7-8.8"/>
    //       </svg>
    //     </button>`,

    //   });

})
setTimeout(() => {

    $('.frequentlty__asked__questions__row .faq__wrap p').each(function () {
        $(this).css({ '--height': (this.clientHeight + 'px') })

    })
    setTimeout(() => {
        $('.frequentlty__asked__questions__row .faq__wrap p').each(function () {
            $(this).css({ 'height': (0 + 'px') })
            // $(this).fadeOut(500)
        })
    }, 100);
    $('.frequentlty__asked__questions__row .faq__wrap').each(function () {
        $(this).click(function () {
            $('.frequentlty__asked__questions__row .faq__wrap ').each(function () {
                $(this).removeClass('active__tab')
                // $(this).find('p').fadeOut(0)
                $(this).find('p').css({ 'height': (0 + 'px') })

            })

            $(this).addClass('active__tab');
            $(this).find('p').css({ 'height': ($(this).find('p').css('--height')) })
            // $(this).find('p').fadeIn(500)

        })

    })
    setTimeout(() => {

        $('.frequentlty__asked__questions__row .faq__wrap:first-child ').addClass('active__tab')
        $('.frequentlty__asked__questions__row .faq__wrap:first-child p').each(function () {
            $(this).css({ 'height': ($(this).css('--height')) })

        })
    }, 100);

}, 100);

