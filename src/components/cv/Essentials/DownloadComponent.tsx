import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Modals from '../containers/Modals';
import FileView from '../containers/FileView';
export default function DownloadComponent({showDownload, setshowDownload, staticInf, handlerChangeByDownload}) {
   if(!showDownload) return<></>;
  return (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.1 }}
        >
          <Modals
            setshowDownload={setshowDownload}
            title="Download curriculum vitae"
          >
            <FileView
              title={"" + staticInf.name + "_cv.pdf"}
              cv={staticInf.cv.en.cv_pdf}
              handlerChangeByDownload={handlerChangeByDownload}
              index={1}
            >
              {staticInf.cv.en.text}
            </FileView>
            <FileView
              title={staticInf.name + "_cv.pdf"}
              cv={staticInf.cv.es.cv_pdf}
              handlerChangeByDownload={handlerChangeByDownload}
              index={2}
            >
              {staticInf.cv.es.text}
            </FileView>
          </Modals>
        </motion.div>
  )
}
