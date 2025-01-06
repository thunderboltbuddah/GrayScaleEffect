async function init() {
  let rustApp = null

  try {
    rustApp = await import('../pkg/')
  } catch(err) {
    console.error(err)
    return;
  }

  

  const input = document.getElementById('upload')
  const fileReader = new FileReader()

  fileReader.onloadend = () => {
    let base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/, ''
    )
    console.log("before rust")
   let img_data_url=rustApp.grayscale(base64)
   document.getElementById('new-img').setAttribute(
    'src',img_data_url
   )
  }

  input.addEventListener('change', () => {
    fileReader.readAsDataURL(input.files[0])
  })
}

init()