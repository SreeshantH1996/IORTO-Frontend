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
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Eye certificate</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Self Declaration Form</td>
              <td>the Bird</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Medical certificate</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </table>
        <hr>
        <!-- Other -->
        <div class="table_tittle">Other Documnets</div>
        <div style="text-align: left;margin-top:2%;margin-bottom:2%;">
          <form action="">
            <label>Upload Documents</label>
            <div class="form-group">
              <input
                type="file"
                class="form-control-file"
                accept="application/pdf"
                name="identityproof"
                required
              />
            </div>
          </form>
          <button type="submit" class="btn btn-sm btn-primary">Submit</button>
        </div>
        <table class="table" style="text-align: left">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Document Name</th>
              <th scope="col">Document Link</th>
              <th scope="col">Delete Document</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Identity Certificate</td>
              <td>Otto</td>
              <td><a href="">Delete</a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Eye certificate</td>
              <td>Thornton</td>
              <td><a href="">Delete</a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Self Declaration Form</td>
              <td>the Bird</td>
              <td><a href="">Delete</a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Medical certificate</td>
              <td>the Bird</td>
              <td><a href="">Delete</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/DocumentList.ts"></script>
<style scoped src="../css/DocumentList.css"></style>