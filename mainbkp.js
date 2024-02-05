$(document).ready(function () {

  var myLocalStorageVar = localStorage.getItem('DISCLAIMER');
  let quick__navigation__links__outer = document.querySelector('.quick__navigation__links__outer')
  if (quick__navigation__links__outer) {
    if (!myLocalStorageVar) {
      // $('.disclaimer__popup__outer').css({ 'display': 'flex' });
      $('body').append(`
        <div class="disclaimer__popup__outer" id="disclaimer_popup">
      <div class="disclaimer__popup__overlay"></div>
      <div class="disclaimer__popup__contentbox">
        <h4>${$('html').attr('dir') !== 'rtl' ? 'Disclaimer' : 'بيان إخلاء مسؤولية'}</h4>
        <div class="disclaimer_content">
        ${$('html').attr('dir') !== 'rtl' ?
          '<p>The following pages contain information relating to a proposed transaction by the Savola Group Company ("Savola"). </p><p>This information may not be accessed by residents of certain countries based on applicable securities law regulations.</p><h5>NOT FOR DISTRIBUTION, DIRECTLY OR INDIRECTLY, IN THE UNITED STATES OF AMERICA, AUSTRALIA, CANADA, JAPAN, SOUTH AFRICA OR ANY OTHER JURISDICTION WHERE TO DO SO WOULD BE PROHIBITED BY APPLICABLE LAW.</h5><p>The following pages include information pertaining to a proposed transaction by Savola.</p><p>This website and the information contained herein are not intended for, and may not be accessed by, or distributed or disseminated to, persons resident or physically present in the United States of America (including its territories and possessions), any state of the United States and the District of Columbia (the "United States"), Australia, Canada, Japan, South Africa, and do not constitute an offer to sell or the solicitation of an offer to purchase or acquire, any securities of Savola in the United States, Australia, Canada, Japan, South Africa or in any other jurisdiction in which such offer or solicitation would be unlawful prior to registration or qualification under the securities laws of such jurisdiction. The securities of Savola referred to on this website have not been and will not be registered under the United States Securities Act of 1933, as amended (the "Securities Act"), and may not be offered or sold in the United States absent registration or an exemption from registration under the Securities Act.</p><p>This website and the information contained herein are not intended for, and may not be accessed by, or distributed or disseminated to, persons in any member state of the European Economic Area other than persons who are qualified investors within the meaning of Regulation (EU) 2017/1129. Any investment or investment activity to which this website and the information contained herein relate are available only to, and will be engaged in only with, qualified investors. Persons who are not qualified investors should not take any action on the basis of these materials and should not act or rely on them.</p><p>No representation or warranty, express or implied, is made as to, and no reliance should be placed by any person for any purpose on the information contained in this website, fairness, accuracy, completeness or correctness of the information or opinions contained in this website. The information in this website is subject to change, update, revision, verification and amendment and such information may change materially. Savola is under no obligation to update or keep current the information contained in this website and any opinions expressed in it are subject to change without notice.</p><p>All persons residing outside of the United States, Australia, Canada, Japan, South Africa who wish to access the documents contained on this website should first ensure that they are not subject to local laws or regulations that prohibit or restrict their right to access this website, or require registration or approval for any acquisition of securities by them.  Savola assumes no responsibility if there is a violation of applicable law and regulations by any person. If you are not permitted to view materials on this website or are in any doubt as to whether you are permitted to view these materials, please exit this webpage.</p><p>Access to electronic versions of these materials is being made available on this webpage by Savola in good faith and for information purposes only.</p><p>By clicking "Yes" you confirm and certify that:</p><p>You are not a resident of or physically present in the United States, Australia, Canada, Japan, South Africa or any other restricted jurisdiction; and you are either: (a) a resident of, or physically present in, either a member state of the European Economic Area or the United Kingdom and a qualified investor as defined in either Article 2(e) of the Prospectus Regulation (EU) 2017/1129 or Article 2(e) of Prospectus Regulation (EU) 2017/1129 as it forms part of UK domestic law by virtue of the European Union (Withdrawal) Act 2018 (as amended and supplemented from time to time), as the case may be; or (b) otherwise authorized to access this information pursuant to applicable laws or regulations.</p>'
          :
          '<p>تحتوي الصفحات التالية على معلومات تتعلق بالصفقة المزمعة لشركة مجموعة صافولا ("صافولا").</p><p>لا يجوز للمقيمين في بعض البلدان الاطلاع على هذه المعلومات بناءً على قوانين الأوراق المالية المعمول بها.</p><h5>ليس للتوزيع، بشكل مباشر أو غير مباشر، في الولايات المتحدة الأمريكية، وأستراليا، وكندا، واليابان، وجنوب أفريقيا، أو أي سلطة قضائية أخرى حيث يتم حظر ذلك بموجب القانون المعمول به.</h5><p>تتضمن الصفحات التالية معلومات تتعلق بالصفقة المزمعة لصافولا.</p><p>هذا الموقع والمعلومات الواردة فيه ليست مخصصة، ولا يجوز توفيرها أو توزيعها أو نشرها على الأشخاص المقيمين أو الموجودين فعليًا في الولايات المتحدة الأمريكية (بما فيها أراضيها وممتلكاتها)، وأي ولاية من الولايات المتحدة ومقاطعة كولومبيا ("الولايات المتحدة")، وأستراليا، وكندا، واليابان، وجنوب أفريقيا، ولا تشكل عرضًا لبيع أو التماس عرض لشراء أو الحصول على أي أوراق مالية لصافولا في الولايات المتحدة، أو أستراليا، أو كندا، أو اليابان، أو جنوب أفريقيا، أو في أي دولة أخرى يكون فيها هذا العرض أو الالتماس غير قانوني قبل التسجيل أو التأهيل بموجب قوانين الأوراق المالية لهذه الدولة. ولم ولن يتم تسجيل الأوراق المالية لصافولا المشار إليها على هذا الموقع الإلكتروني بموجب قانون الأوراق المالية الأمريكي لعام 1933 وتعديلاته ("قانون الأوراق المالية") ولا يجوز عرضها أو بيعها في الولايات المتحدة بدون تسجيل أو بدون إعفاءٍ من التسجيل بموجب قانون الأوراق المالية.</p><p>هذا الموقع والمعلومات الواردة فيه ليست مخصصة، ولا يجوز توفيرها أو توزيعها أو نشرها على الأشخاص الموجودين في أي دولة عضو في المنطقة الاقتصادية الأوروبية باستثناء الأشخاص الذين هم مستثمرون مؤهلون بموجب المعنى الذي تنص عليه لائحة (الاتحاد الأوروبي) رقم 2017/1129. أما أي استثمار أو نشاط استثماري يرتبط به هذا الموقع الإلكتروني والمعلومات الواردة فيه فيكون متاحًا للمستثمرين المؤهلين ويتم الاضطلاع به من قبلهم حصريًا. وبالتالي، يتوجب على الأشخاص الذين ليسوا مستثمرين مؤهلين الامتناع عن اتخاذ أي إجراء على أساس هذه المواد والامتناع أيضًا عن التصرف بناءً عليها أو الاعتماد عليها.</p><p>لا يجوز أن يُقدم أي إقرار أو ضمان، صريحًا كان أم ضمنيًا، ولأي غرض، بشأن المعلومات الواردة في هذا الموقع ولا بشأن عدالة أو دقة أو اكتمال أو صحة المعلومات أو الآراء الواردة في هذا الموقع، كما لا ينبغي لأي شخص الاعتماد على أي من ذلك. إن المعلومات الواردة في هذا الموقع عرضة للتغيير والتحديث والمراجعة والتحقق والتعديل، وقد تتغير هذه المعلومات تغييرًا جوهريًا. ليست مجموعة صافولا ملزمة بتحديث أو الاستمرار في تحديث المعلومات الواردة في هذا الموقع، كما يجوز أن تتغير الآراء التي يتم إبداؤها فيه دون إشعار مسبق.</p><p>يجب على جميع الأشخاص المقيمين خارج الولايات المتحدة، وأستراليا، وكندا، واليابان، وجنوب أفريقيا الذين يرغبون في الوصول إلى المستندات الواردة في هذا الموقع التأكد أولاً من أنهم لا يخضعون للقوانين أو اللوائح المحلية التي تحظر أو تقيّد حقهم في الوصول إلى هذا الموقع، أو تتطلب التسجيل أو الموافقة على أي استحواذ على الأوراق المالية من قبلهم.</p><p>لا تتحمل صافولا أي مسؤولية إذا كان هناك انتهاك للقانون واللوائح المعمول بها من قبل أي شخص. إذا لم يكن مسموحًا لك بالاطلاع على المحتويات الموجودة على هذا الموقع أو إذا كان لديك أي شك بشأن ما إذا كان مسموحًا لك بالاطلاع على هذه المحتويات، فيرجى الخروج من صفحة الويب هذه.</p><p>يتم توفير الوصول إلى النسخ الإلكترونية من هذه المحتويات على صفحة الويب هذه من قبل صافولا بحسن نية ولأغراض المعلومات فقط.</p><p>بالنقر على "نعم"، فإنك تؤكد وتقر:</p><p>أنّك لست مقيمًا ولا موجودًا فعلياً في الولايات المتحدة، وأستراليا، وكندا، واليابان، وجنوب أفريقيا أو في أي دولة أخرى خاضعة للقيود؛ وأنك إما (أ) تسكن أو موجود فعليًا في دولة عضو في المنطقة الاقتصادية الأوروبية أو في المملكة المتحدة وأنك مستثمر مؤهل بموجب التعريف الوارد في المادة 2(ه) من لائحة النشرة (الصادرة عن الاتحاد الأوروبي) رقم 2017/1129 أو المادة 2(ه) من لائحة النشرة (الصادرة عن الاتحاد الأوروبي) رقم 2017/1129 والتي تشكل جزءًا من القانون المحلي البريطاني بموجب قانون (الانسحاب من) الاتحاد الأوروبي لعام 2018 (والتعديلات والإضافات التي تجري عليه من وقتٍ إلى آخر)، بحسب الاقتضاء؛ أو (ب) مخول للاطلاع على هذه المعلومات بموجب الأنظمة واللوائح المعمول بها.</p>'
        }
          </div>
        <p>${$('html').attr('dir') !== 'rtl' ? 'By clicking "Confirm" you confirm and certify that you have read and understood the foregoing, and hereby make the certifications above and agree to comply with all of the above restrictions.' : 'بالنقر على "تأكيد"، فإنك تؤكد وتقر بأنك قد قرأت وفهمت ما سبق، وبهذا تقدم الشهادات أعلاه وتوافق على الامتثال لجميع القيود المذكورة أعلاه.'}</p>

        <button id="i_agree">${$('html').attr('dir') !== 'rtl' ? 'I agree' : 'I agree'}</button>
      </div>
    </div>
      `)
      $('body').css({ 'overflow': 'hidden' });
    }
    $('#i_agree').click(function () {
      $('body').css({ 'overflow': 'auto' });
      localStorage.setItem('DISCLAIMER', true);
      $('.disclaimer__popup__outer').remove();
    })
  }
  $('.overview__slider__mutli').slick({
    infinite: false,
    slidesToShow: 3,
    rtl: $('html').attr('dir') === 'rtl', // Use jQuery to get the 'dir' attribute
    slidesToScroll: 1, // Keep slidesToScroll positive regardless of RTL
    nextArrow: `<button class="slick__btn slick__nxt">
      <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.969824" y1="10.3314" x2="20.2187" y2="10.3314" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.9006 1.67871L21.5978 10.4383L12.9006 19.198" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    prevArrow: `<button class="slick__btn slick__prev">
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21" width="23" height="21">
        <title>icons-svg</title>
        <style>
          .s0 { fill: none;stroke: #114d69;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.8 } 
        </style>
        <path id="Layer" class="s0" d="m22.6 10.9h-19.2"/>
        <path id="Layer" fill-rule="evenodd" class="s0" d="m10.7 19.5l-8.7-8.7 8.7-8.8"/>
      </svg>
    </button>`,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });
  $('.overview__slider').slick({
    infinite: false,
    slidesToShow: 1,
    rtl: $('html').attr('dir') === 'rtl', // Use jQuery to get the 'dir' attribute
    slidesToScroll: 1, // Keep slidesToScroll positive regardless of RTL
    nextArrow: `<button class="slick__btn slick__nxt">
      <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.969824" y1="10.3314" x2="20.2187" y2="10.3314" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.9006 1.67871L21.5978 10.4383L12.9006 19.198" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    prevArrow: `<button class="slick__btn slick__prev">
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21" width="23" height="21">
        <title>icons-svg</title>
        <style>
          .s0 { fill: none;stroke: #114d69;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.8 } 
        </style>
        <path id="Layer" class="s0" d="m22.6 10.9h-19.2"/>
        <path id="Layer" fill-rule="evenodd" class="s0" d="m10.7 19.5l-8.7-8.7 8.7-8.8"/>
      </svg>
    </button>`,

  });

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

