import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as DocumentIcon } from '../../../assets/icon-document.svg';
import { ReactComponent as FolderIcon } from '../../../assets/icon-folder.svg';
import { ReactComponent as UploadIcon } from '../../../assets/icon-upload.svg';

const Header = () => (
  <div className="header">
    <a href="https://fylo.com">
      <Logo title="Fylo Logo" />
    </a>
  </div>
);

Header.propTypes = {};

const Icon = ({ svgFile: SVGFile, title, link }) => (
  <div className="icon">
    <SVGFile title={title} />
  </div>
);

Icon.propTypes = {
  svgFile: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Icon.defaultProps = {
  title: '',
};

const FyloActions = () => {
  return (
    <div className="actions">
      <Header />
      <div className="icons">
        <Icon svgFile={DocumentIcon} title="New Document" />
        <Icon svgFile={FolderIcon} title="New Folder" />
        <Icon svgFile={UploadIcon} title="Upload Document" />
      </div>
    </div>
  );
};

FyloActions.propTypes = {};

export default FyloActions;
