
  document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".block-header-logo");
    let currentIndex = 0;
    const imagePaths = [
      "https://assets.zyrosite.com/Aq2qWzzyPbhXvlwy/whatsapp-image-2025-02-05-at-10.33.05-pm-A0x1ZKnEenFjpMKa.jpeg",
      "https://assets.zyrosite.com/Aq2qWzzyPbhXvlwy/whatsapp-image-2025-02-05-at-10.33.04-pm-m6LjOMz64ZSX8EvB.jpeg",
      "https://assets.zyrosite.com/Aq2qWzzyPbhXvlwy/whatsapp-image-2025-02-05-at-10.33.04-pm-2-AoPqxQ7ODXikwpvp.jpeg",
      "https://assets.zyrosite.com/Aq2qWzzyPbhXvlwy/whatsapp-image-2025-02-05-at-10.33.04-pm-1-Y4LxB2bqO5UOzR0a.jpeg",
    ];

    // Preload all images to ensure they load correctly
    const preloadImages = imagePaths.map((path) => {
      const img = new Image();
      img.src = path;
      return img;
    });

    function updateImage() {
      const img = new Image(); // Create a new image element
      img.src = imagePaths[currentIndex];
      img.alt = `Slide ${currentIndex + 1}`;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.transition = "opacity 1s ease-in-out";
      img.style.opacity = "0";

      // Error handling in case the image doesn't load
      img.onerror = function () {
        console.error("Image failed to load, using fallback image.");
        img.src = "fallback-image-url.jpg"; // Use a fallback image in case of error
      };

      // Once the image is loaded, append it
      img.onload = function () {
        imageContainer.innerHTML = ""; // Remove old image
        imageContainer.appendChild(img);

        // Fade in effect
        setTimeout(() => {
          img.style.opacity = "1";
        }, 100);

        // Move to the next image
        currentIndex = (currentIndex + 1) % imagePaths.length;
      };

      // Set the image source after the error handling
      img.src = imagePaths[currentIndex];
    }

    updateImage(); // Load the first image
    setInterval(updateImage, 10000); // Change every 10 seconds

    // Get the target div where you want to insert the social icons
    const targetDiv = document.querySelector('.text-box.block-sticky-bar__element');

    // Create the social icons HTML
    const socialIconsHTML = `
      <div class="header-social-icon social-icons social-icons--row layout-element__component layout-element__component--GridSocialIcons" style="--m-icon-direction:row;--icon-padding-vertical:0;--icon-padding-horizontal:var(--space-between-icons);height:100%;--space-between-icons:0px;" id="ai-vfS6YB" data-v-5567603e="" data-v-17c99e7b="" data-qa="gridsocialicons:ai-vfs6yb">
        <div class="info">
          <div class="phone">+1(314) 971-5525</div>
          <div class="email">info@alavisports.com</div>
        </div>
        <a href="https://www.facebook.com/AlaviSports?mibextid=wwXIfr&amp;mibextid=wwXIfr" target="_blank" rel="noopener" title="Go to Facebook page" class="social-icons__link fb" data-v-17c99e7b="">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z" fill="currentColor"></path>
            </svg>
        </a>
        <a href="https://www.instagram.com/alavisports/" target="_blank" rel="noopener" title="Go to Instagram page" class="social-icons__link instagram" data-v-17c99e7b="">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277ZM21.3564 19.0728C20.9388 20.1223 20.1303 20.9307 19.0755 21.3537C17.496 21.9802 13.7481 21.8356 12.0027 21.8356C10.2572 21.8356 6.50396 21.9748 4.92984 21.3537C3.88042 20.9361 3.07195 20.1276 2.64897 19.0728C2.02253 17.4934 2.16709 13.7455 2.16709 12C2.16709 10.2546 2.02789 6.50129 2.64897 4.92717C3.06659 3.87776 3.87507 3.06928 4.92984 2.6463C6.50931 2.01986 10.2572 2.16443 12.0027 2.16443C13.7481 2.16443 17.5014 2.02522 19.0755 2.6463C20.1249 3.06392 20.9334 3.8724 21.3564 4.92717C21.9828 6.50665 21.8383 10.2546 21.8383 12C21.8383 13.7455 21.9828 17.4987 21.3564 19.0728Z" fill="currentColor"></path>
            </svg>
        </a>
        <a href="https://tiktok.com/" target="_blank" rel="noopener" title="Go to Tiktok page" class="social-icons__link tiktok" data-v-17c99e7b="">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 9.84202C20.4357 9.84696 18.4221 9.20321 16.7435 8.00171V16.3813C16.7429 17.9333 16.2685 19.4482 15.3838 20.7233C14.499 21.9984 13.246 22.973 11.7923 23.5168C10.3387 24.0606 8.75362 24.1477 7.24914 23.7664C5.74466 23.3851 4.39245 22.5536 3.37333 21.383C2.3542 20.2125 1.71674 18.7587 1.54617 17.2161C1.3756 15.6735 1.68007 14.1156 2.41884 12.7507C3.15762 11.3858 4.2955 10.279 5.68034 9.57823C7.06517 8.87746 8.63095 8.61616 10.1683 8.82927V13.0439C9.46481 12.8227 8.70938 12.8293 8.0099 13.063C7.31041 13.2966 6.70265 13.7453 6.2734 14.345C5.84415 14.9446 5.61536 15.6646 5.6197 16.402C5.62404 17.1395 5.8613 17.8567 6.29759 18.4512C6.73387 19.0458 7.34688 19.4873 8.04906 19.7127C8.75125 19.9381 9.5067 19.9359 10.2075 19.7063C10.9084 19.4768 11.5188 19.0316 11.9515 18.4345C12.3843 17.8374 12.6173 17.1188 12.6173 16.3813V0H16.7435C16.7406 0.348435 16.7698 0.696395 16.8307 1.03948C16.9741 1.80537 17.2722 2.53396 17.7068 3.18068C18.1415 3.8274 18.7035 4.37867 19.3585 4.80075C20.2903 5.41688 21.3829 5.74528 22.5 5.74505V9.84202Z" fill="currentColor"></path>
          </svg>
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener" title="Go to Twitter page" class="social-icons__link twitter" data-v-17c99e7b="">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
    `;

    // Insert the social icons into the target div
    targetDiv.innerHTML = socialIconsHTML;
  });
