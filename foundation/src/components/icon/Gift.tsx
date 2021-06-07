import * as React from "react";

function SvgComponent(props): JSX.Element {
  return (
    <svg
      width={106}
      height={106}
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M103.432 62.843c-3.421-3.849-9.342-4.204-13.199-.793l-5.14 4.547V37.265h1.036a3.105 3.105 0 003.105-3.105V19.668a3.105 3.105 0 00-3.105-3.106H71.422a11.313 11.313 0 001.25-5.175C72.672 5.108 67.564 0 61.285 0c-3.26 0-6.203 1.38-8.28 3.584A11.353 11.353 0 0044.722 0c-6.279 0-11.387 5.108-11.387 11.387 0 1.863.453 3.621 1.25 5.175H19.879a3.106 3.106 0 00-3.105 3.106V34.16a3.106 3.106 0 003.105 3.105h1.035v23.51c-1.899.922-3.696 2.084-5.349 3.479l-2.48 2.09-10.991 4.711a3.106 3.106 0 00-1.632 4.077l12.422 28.985a3.107 3.107 0 004.078 1.631l10.83-4.642h41.019c3.835 0 7.52-1.411 10.373-3.974l23.506-21.105c3.821-3.431 4.154-9.346.742-13.184zm-24.55 9.248l-4.235 3.747c.016-.221.024-.445.024-.67 0-5.137-4.18-9.317-9.321-9.317l-9.24.016V37.265h22.773v34.826zm4.141-41.037H56.11v-8.28h26.913v8.28zM61.285 6.211a5.182 5.182 0 015.176 5.176 5.182 5.182 0 01-5.176 5.175H56.11v-5.175a5.182 5.182 0 015.175-5.176zm-21.738 5.176a5.182 5.182 0 015.176-5.176 5.182 5.182 0 015.176 5.176v5.175h-5.176a5.182 5.182 0 01-5.176-5.175zM22.985 22.773h26.914v8.281H22.985v-8.28zm4.14 14.492H49.9v28.296C45.603 61.328 40 58.772 33.93 58.315a25.625 25.625 0 00-6.805.391v-21.44zM17.37 98.816L7.395 75.541l5.708-2.447 9.975 23.276-5.708 2.446zm81.17-27.41L75.035 92.51a9.302 9.302 0 01-6.224 2.385H29.203L18.494 69.908 19.57 69a19.314 19.314 0 015.552-3.282c.042-.016.085-.03.127-.048 2.59-.97 5.38-1.376 8.216-1.163a19.195 19.195 0 0113.064 6.523 3.105 3.105 0 002.335 1.059h.005l4.004-.007c.044.002.087.007.132.007.048 0 .094-.005.141-.008l12.21-.02a3.109 3.109 0 013.105 3.106 3.109 3.109 0 01-3.105 3.105H43.982a3.106 3.106 0 000 6.211h26.736a9.31 9.31 0 006.172-2.338l17.458-15.444a3.155 3.155 0 014.442.267 3.157 3.157 0 01-.25 4.437z"
        fill="#9E4023"
      />
    </svg>
  );
}

export default SvgComponent;