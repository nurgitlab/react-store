import ContentLoader from "react-content-loader";
import React from "react";


function ShavaLoadingBlock() {
  return (
    <ContentLoader
      speed={4}
      width={280}
      height={380}
      viewBox="0 0 280 380"
      backgroundColor="#f3f3f3"
      foregroundColor="#cab9b9"
    >
      <rect x="0" y="0" rx="15" ry="15" width="280" height="180" />
      <rect x="104" y="108" rx="0" ry="0" width="57" height="0" />
      <rect x="30" y="124" rx="0" ry="0" width="280" height="24" />
      <rect x="0" y="210" rx="15" ry="15" width="280" height="60" />
      <rect x="0" y="186" rx="15" ry="15" width="280" height="20" />
      <rect x="0" y="280" rx="20" ry="20" width="80" height="40" />
      <rect x="160" y="280" rx="15" ry="15" width="120" height="40" />
    </ContentLoader>
  )
}

export default ShavaLoadingBlock