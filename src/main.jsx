// src/shared-globals.js

import React from "react";
import ReactDOM from "react-dom/client";

import * as ReactRouterDOM from "react-router-dom";

// MUI
import * as MaterialUI from "@mui/material";
import * as MaterialUICore from "@material-ui/core";
import * as MuiIcons from "@mui/icons-material";
import * as MuiXDatePickers from "@mui/x-date-pickers";
import * as MuiStyles from "@mui/styles";
import * as MuiStyledEngineSc from "@mui/styled-engine-sc";


// Emotion
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as EmotionJSXRuntime from "@emotion/react/jsx-runtime";

// Redux
import * as ReactRedux from "react-redux";
import * as ReduxToolkit from "@reduxjs/toolkit";

// Core utils
import Axios from "axios";
import Dayjs from "dayjs";
import * as DateFns from "date-fns";
import { v4 as UUIDv4 } from "uuid";
import moment from "moment";
import * as jwtDecode from "jwt-decode";

// Icons
import * as ReactIcons from "react-icons";

/* ───────────────
   Heavy shared libs
   ─────────────── */
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import FileSaver from "file-saver";

// UI helpers
import * as ReactToastify from "react-toastify";
import * as ReactSelect from "react-select";
import ReactToPrint from "react-to-print";
import * as ReactCSVDownloader from "react-csv-downloader";
import * as ReactDropzone from "react-dropzone";
import * as ReactDropzoneUploader from "react-dropzone-uploader";
import * as ReactImagesUploading from "react-images-uploading";
import ReactModernDrawer from "react-modern-drawer";
import * as ReactMultiSelectComponent from "react-multi-select-component";
import * as ReactResponsiveModal from "react-responsive-modal";

// Date pickers
import * as BootstrapDateRangePicker from "bootstrap-daterangepicker";
import * as ReactBootstrapDateRangePicker from "react-bootstrap-daterangepicker";

// UI frameworks
import * as EvergreenUI from "evergreen-ui";
import * as RSuite from "rsuite";

// Misc
import Swiper from "swiper";
import * as WebVitals from "web-vitals";

/* ───────────────
   Attach to window
   ─────────────── */

window.React = React;
window.ReactDOM = ReactDOM;

window.ReactRouterDOM = ReactRouterDOM;

// MUI
window.MaterialUI = MaterialUI;
window.MaterialUICore = MaterialUICore;
window.MuiIcons = MuiIcons;
window.MuiXDatePickers = MuiXDatePickers;
window.MuiStyles = MuiStyles;
window.MuiStyledEngineSc = MuiStyledEngineSc;

// Emotion
window.EmotionReact = EmotionReact;
window.EmotionStyled = EmotionStyled;
window.EmotionJSXRuntime = EmotionJSXRuntime;

// Redux
window.ReactRedux = ReactRedux;
window.ReduxToolkit = ReduxToolkit;

// Core utils
window.Axios = Axios;
window.Dayjs = Dayjs;
window.DateFns = DateFns;
window.UUID = UUIDv4;
window.moment = moment;
window.jwtDecode = jwtDecode;

// Icons
window.ReactIcons = ReactIcons;

// Heavy libs
window.XLSX = XLSX;
window.jsPDF = jsPDF;
window.jsPDFAutoTable = autoTable;
window.FileSaver = FileSaver;

// UI helpers
window.ReactToastify = ReactToastify;
window.ReactSelect = ReactSelect;
window.ReactToPrint = ReactToPrint;
window.ReactCSVDownloader = ReactCSVDownloader;
window.ReactDropzone = ReactDropzone;
window.ReactDropzoneUploader = ReactDropzoneUploader;
window.ReactImagesUploading = ReactImagesUploading;
window.ReactModernDrawer = ReactModernDrawer;
window.ReactMultiSelectComponent = ReactMultiSelectComponent;
window.ReactResponsiveModal = ReactResponsiveModal;

// Date range pickers
window.BootstrapDaterangepicker = BootstrapDateRangePicker;
window.ReactBootstrapDaterangepicker = ReactBootstrapDateRangePicker;

// UI frameworks
window.EvergreenUI = EvergreenUI;
window.RSuite = RSuite;

// Misc
window.Swiper = Swiper;
window.WebVitals = WebVitals;

/* CRA compatibility */
window.process = window.process || { env: {} };

console.log("[shared-globals] loaded");
