import React from "react";

const CommonImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  loading = "lazy",
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      style={{
        objectFit: "contain",
        ...style,
      }}
      {...props}
    />
  );
};

export default CommonImage;
