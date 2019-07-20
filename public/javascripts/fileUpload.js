/* eslint-disable no-undef */
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetWidth: 200,
    imageResizeTargetHeight: 300,
})

FilePond.parse(document.body)