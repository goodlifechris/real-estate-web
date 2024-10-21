import React from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Box, Heading } from "@chakra-ui/react";
import { getDocument } from 'pdfjs-dist';

// Define props type for PDFViewer component
interface PDFViewerProps {
    pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
    // Initialize the default layout plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="md" width="100%" maxWidth="800px" mx="auto" my={8}>
            {/* Use Chakra's Box component for styling the container */}
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </Box>
    );
};

export default PDFViewer;
