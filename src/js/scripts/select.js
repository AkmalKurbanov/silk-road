$(document).ready(function () {
  $('.select__checked').on('click', function () {
    $(this).next().addClass('fade-dropdown');
  });
  $('.select__dropdown li').on('click', function () {
    var value = $(this).attr('data-value');
    $(this).parent().parent().find('.select__dropdown').removeClass('fade-dropdown');
    $(this).parent().parent().find('.select__checked').text(value);
    $(this).parent().parent().parent().find('.select-type').val(value);
  });

  $('.select__checked').on('click', function () {
    $('.select__checked').not(this).next().removeClass('fade-dropdown');
  });
  $(document).mouseup(function (e) {
    var div = $(".select__checked");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.select__dropdown').removeClass('fade-dropdown');
    }
  });


});