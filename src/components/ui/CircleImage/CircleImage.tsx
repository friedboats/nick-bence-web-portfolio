import React from 'react';
import Image from 'next/image';

interface CircleImageProps {
  name: 'nick-bence' | 'starbucks' | 'dynatrace' | 'nathans';
  size?: 'small' | 'large';
}

const containerSizeMap = {
  small: 192,
  large: 424,
};

const imageSizeMap = {
  small: 192,
  large: 377,
};

const CircleImage = ({ name, size = 'small' }: CircleImageProps) => {
  const src = `/circle-${name}.png`;
  const alt = `${name.charAt(0).toUpperCase() + name.slice(1)} logo`;
  const isLarge = size === 'large';
  const containerSize = containerSizeMap[size];
  const imageSize = imageSizeMap[size];

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: containerSize,
        height: containerSize,
        borderRadius: '50%',
      }}
    >
      <Image
        src={src}
        overrideSrc={src}
        alt={alt}
        width={imageSize}
        height={imageSize}
      />
      {isLarge && (
        <svg
          width={containerSize}
          height={containerSize}
          viewBox={`0 0 ${containerSize} ${containerSize}`}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            top: 0,
            left: 0,
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M196.202 0.647471C201.695 0.220722 207.247 0.00341797 212.848 0.00341797C218.449 0.00341797 224 0.220722 229.493 0.647474C231.696 0.818582 233.342 2.74277 233.171 4.94528C233 7.14778 231.076 8.79455 228.874 8.62344C223.586 8.21269 218.242 8.00342 212.848 8.00342C207.454 8.00342 202.109 8.21269 196.822 8.62344C194.619 8.79455 192.695 7.14777 192.524 4.94527C192.353 2.74277 194 0.818579 196.202 0.647471ZM168.16 8.77581C168.674 10.9243 167.349 13.0827 165.201 13.5968C154.716 16.1053 144.546 19.4234 134.76 23.4815C132.719 24.3277 130.379 23.3594 129.533 21.3188C128.687 19.2781 129.655 16.9379 131.696 16.0917C141.868 11.8733 152.44 8.424 163.339 5.81635C165.488 5.30232 167.646 6.62731 168.16 8.77581ZM257.535 8.77582C258.049 6.62731 260.208 5.30232 262.356 5.81636C273.255 8.42401 283.827 11.8733 294 16.0917C296.04 16.9379 297.009 19.2782 296.162 21.3188C295.316 23.3594 292.976 24.3277 290.935 23.4815C281.149 19.4234 270.979 16.1053 260.495 13.5968C258.346 13.0827 257.021 10.9243 257.535 8.77582ZM107.564 32.5343C108.72 34.4168 108.131 36.88 106.248 38.0361C97.1196 43.6419 88.4653 49.9466 80.3601 56.8756C78.6809 58.3111 76.156 58.1135 74.7205 56.4343C73.285 54.7552 73.4825 52.2302 75.1617 50.7947C83.5829 43.5956 92.5754 37.0445 102.062 31.2189C103.945 30.0628 106.408 30.6518 107.564 32.5343ZM318.131 32.5343C319.288 30.6518 321.751 30.0628 323.633 31.2189C333.12 37.0445 342.112 43.5956 350.534 50.7947C352.213 52.2302 352.41 54.7552 350.975 56.4343C349.539 58.1135 347.014 58.311 345.335 56.8755C337.23 49.9465 328.576 43.6419 319.447 38.0361C317.564 36.88 316.975 34.4168 318.131 32.5343ZM368.417 73.8763C370.096 72.4408 372.621 72.6383 374.056 74.3175C381.255 82.7387 387.807 91.7312 393.632 101.218C394.788 103.1 394.199 105.564 392.317 106.72C390.434 107.876 387.971 107.287 386.815 105.404C381.209 96.2754 374.905 87.6211 367.976 79.5159C366.54 77.8367 366.738 75.3118 368.417 73.8763ZM57.2786 73.8763C58.9577 75.3118 59.1553 77.8367 57.7198 79.5159C50.7908 87.6211 44.4862 96.2754 38.8803 105.404C37.7243 107.287 35.261 107.876 33.3785 106.72C31.496 105.564 30.9071 103.1 32.0631 101.218C37.8887 91.7312 44.4398 82.7387 51.6389 74.3175C53.0744 72.6383 55.5994 72.4408 57.2786 73.8763ZM22.163 128.689C24.2037 129.535 25.1719 131.875 24.3257 133.916C20.2676 143.702 16.9495 153.872 14.441 164.357C13.927 166.505 11.7686 167.83 9.62005 167.316C7.47155 166.802 6.14656 164.644 6.66059 162.495C9.26825 151.596 12.7176 141.024 16.9359 130.851C17.7821 128.811 20.1224 127.842 22.163 128.689ZM403.532 128.689C405.573 127.842 407.913 128.811 408.759 130.851C412.978 141.024 416.427 151.596 419.035 162.495C419.549 164.644 418.224 166.802 416.075 167.316C413.927 167.83 411.768 166.505 411.254 164.357C408.746 153.872 405.428 143.702 401.37 133.916C400.523 131.875 401.492 129.535 403.532 128.689ZM5.78951 191.68C7.99202 191.851 9.63879 193.775 9.46768 195.978C9.05693 201.265 8.84766 206.609 8.84766 212.003C8.84766 217.398 9.05693 222.742 9.46768 228.029C9.63878 230.232 7.99201 232.156 5.78951 232.327C3.58701 232.498 1.66282 230.851 1.49171 228.649C1.06496 223.156 0.847656 217.605 0.847656 212.003C0.847656 206.402 1.06496 200.851 1.49171 195.358C1.66282 193.155 3.58701 191.509 5.78951 191.68ZM419.906 191.68C422.108 191.509 424.033 193.155 424.204 195.358C424.63 200.851 424.848 206.402 424.848 212.003C424.848 217.605 424.63 223.156 424.204 228.649C424.033 230.851 422.108 232.498 419.906 232.327C417.703 232.156 416.057 230.232 416.228 228.029C416.638 222.742 416.848 217.398 416.848 212.003C416.848 206.609 416.638 201.265 416.228 195.978C416.057 193.775 417.703 191.851 419.906 191.68ZM9.62005 256.691C11.7686 256.177 13.927 257.502 14.441 259.65C16.9495 270.135 20.2676 280.305 24.3257 290.091C25.1719 292.132 24.2037 294.472 22.163 295.318C20.1224 296.164 17.7821 295.196 16.9359 293.156C12.7176 282.983 9.26824 272.411 6.66059 261.512C6.14655 259.363 7.47155 257.205 9.62005 256.691ZM416.075 256.691C418.224 257.205 419.549 259.363 419.035 261.512C416.427 272.411 412.978 282.983 408.759 293.156C407.913 295.196 405.573 296.164 403.532 295.318C401.492 294.472 400.523 292.132 401.37 290.091C405.428 280.305 408.746 270.135 411.254 259.65C411.768 257.502 413.927 256.177 416.075 256.691ZM33.3785 317.287C35.261 316.131 37.7243 316.72 38.8803 318.603C44.4862 327.731 50.7908 336.386 57.7198 344.491C59.1553 346.17 58.9578 348.695 57.2786 350.131C55.5994 351.566 53.0745 351.369 51.639 349.689C44.4398 341.268 37.8887 332.276 32.0631 322.789C30.9071 320.906 31.496 318.443 33.3785 317.287ZM392.317 317.287C394.199 318.443 394.788 320.906 393.632 322.789C387.807 332.276 381.255 341.268 374.056 349.689C372.621 351.369 370.096 351.566 368.417 350.131C366.738 348.695 366.54 346.17 367.976 344.491C374.905 336.386 381.209 327.731 386.815 318.603C387.971 316.72 390.434 316.131 392.317 317.287ZM74.7205 367.573C76.156 365.893 78.681 365.696 80.3601 367.131C88.4653 374.06 97.1196 380.365 106.248 385.971C108.131 387.127 108.72 389.59 107.564 391.473C106.408 393.355 103.945 393.944 102.062 392.788C92.5754 386.962 83.5829 380.411 75.1617 373.212C73.4826 371.777 73.285 369.252 74.7205 367.573ZM350.975 367.573C352.41 369.252 352.213 371.777 350.534 373.212C342.112 380.411 333.12 386.962 323.633 392.788C321.751 393.944 319.288 393.355 318.131 391.473C316.975 389.59 317.564 387.127 319.447 385.971C328.576 380.365 337.23 374.06 345.335 367.131C347.014 365.696 349.539 365.893 350.975 367.573ZM129.533 402.688C130.379 400.647 132.719 399.679 134.76 400.525C144.546 404.583 154.716 407.902 165.201 410.41C167.349 410.924 168.674 413.083 168.16 415.231C167.646 417.38 165.488 418.705 163.339 418.19C152.44 415.583 141.868 412.134 131.696 407.915C129.655 407.069 128.687 404.729 129.533 402.688ZM296.162 402.688C297.009 404.729 296.04 407.069 294 407.915C283.827 412.134 273.255 415.583 262.356 418.19C260.208 418.705 258.049 417.38 257.535 415.231C257.021 413.083 258.346 410.924 260.495 410.41C270.979 407.902 281.149 404.583 290.935 400.525C292.976 399.679 295.316 400.647 296.162 402.688ZM192.524 419.062C192.695 416.859 194.619 415.212 196.822 415.383C202.109 415.794 207.454 416.003 212.848 416.003C218.242 416.003 223.586 415.794 228.873 415.383C231.076 415.212 233 416.859 233.171 419.062C233.342 421.264 231.696 423.188 229.493 423.359C224 423.786 218.449 424.003 212.848 424.003C207.247 424.003 201.695 423.786 196.202 423.359C194 423.188 192.353 421.264 192.524 419.062Z"
            className="fill-border-primary"
          />
        </svg>
      )}
    </div>
  );
};

export default CircleImage;
