<template>
  <div>
    <div class="cont">
      <div style="text-align: left; margin: 4%"></div>
      <h2>Document List</h2>
      <div style="padding-left: 5%; padding-right: 5%; padding-top: 5%">
        <div class="table_tittle">Major Documnets</div>
        <table class="table" style="text-align: left">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Document Name</th>
              <th scope="col">Document Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Identity Certificate</td>
              <td v-if="MainDocuments.identitycertificate">
                <a
                  v-bind:href="
                    'http://localhost:8000' + MainDocuments.identitycertificate
                  "
                  target="__blank"
                  >click here</a
                >
              </td>
              <td v-if="!MainDocuments.identitycertificate">
                No documents Uploaded
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Eye certificate</td>
              <td v-if="MainDocuments.eyecertificate">
                <a
                  v-bind:href="
                    'http://localhost:8000' + MainDocuments.eyecertificate
                  "
                  target="__blank"
                  >click here</a
                >
              </td>
              <td v-if="!MainDocuments.eyecertificate">
                No documents Uploaded
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Self Declaration Form</td>
              <td v-if="MainDocuments.selfcertificate">
                <a
                  v-bind:href="
                    'http://localhost:8000' + MainDocuments.selfcertificate
                  "
                  target="__blank"
                  >click here</a
                >
              </td>
              <td v-if="!MainDocuments.selfcertificate">
                No documents Uploaded
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Medical certificate</td>
              <td v-if="MainDocuments.medicalcertificate">
                <a
                  v-bind:href="
                    'http://localhost:8000' + MainDocuments.medicalcertificate
                  "
                  target="__blank"
                  >click here</a
                >
              </td>
              <td v-if="!MainDocuments.medicalcertificate">
                No documents Uploaded
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <!-- Other -->
        <div class="table_tittle">Other Documnets</div>
        <div style="text-align: left; margin-top: 2%; margin-bottom: 2%">
          <form v-on:submit.prevent="OtherDocument()" id="otherdocumentupload">
            <div class="form-group">
              <label>Document Name<span style="color: red">*</span></label>
              <input
                name="document_name"
                type="text"
                id="document_name"
                class="form-control"
                placeholder="Enter a valid name"
                required
              />
            </div>
            <label>Upload Documents</label>
            <div class="form-group">
              <input
                type="file"
                id="docuemnt_up"
                class="form-control-file"
                accept="application/pdf"
                name="identityproof"
                required
              />
            </div>
            <button type="submit" class="btn btn-sm btn-primary">Submit</button>
          </form>
        </div>
        <table v-if="OtherDocuments.length >= 1" class="table" style="text-align: left">
          <thead>
            <tr>
              <th scope="col">Document Name</th>
              <th scope="col">Document Link</th>
              <th scope="col">Delete Document</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="document in OtherDocuments" v-bind:key="document.id">
              <td>{{ document.document_name }}</td>
              <td>
                <a
                  v-bind:href="
                    'http://localhost:8000' + document.document
                  "
                  target="__blank"
                  >click here</a
                >
              </td>
              <td><button class="btn btn-sm btn-danger" v-on:click="DeleteFile(document.id)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      <div class="row" style="margin-top: 2%; margin-bottom: 2%;">
              <div class="col-6" style="text-align: left">
                <a href="/#/userhome">
                  <button type="button" class="btn btn-lg btn-primary">
                    Back
                  </button>
                </a>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/DocumentList.ts"></script>
<style scoped src="../css/DocumentList.css"></style>