/* eslint-disable no-undef */
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 300 / 200,
    imageResizeTargetHeight: 300,
    imageResizeTargetWidth: 200,

})

FilePond.parse(document.body)